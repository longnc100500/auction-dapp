import React, { Component, useState } from "react"
import { connect, useSelector } from "react-redux"

import RelatedProducts from "./RelatedProducts"
import Description from "./Description"
import { useParams } from "react-router"
import Auction, { AUCTION_STATUS } from "../../../Firebase/Auction"
import web3_infura from "../../../utility/web3Infura"
import web3Local from "../../../utility/web3Local"
import Web3 from "web3"
import { getUserData } from "../../../store/user/selector"
import { toast } from "react-toastify"
import moment from "moment"
import EndAuctionModal from "./EndAuctionModal"
import SlideInModal from "../../../components/SlideInModal"
import useCoundDown from "../../../hook/useCountDown"

const DetailsBody = () => {
  const { id } = useParams()
  const userData = useSelector(getUserData)

  const [imgIndex, setImgIndex] = useState(0)

  const [productData, setProductData] = useState()

  const [bidVal, setBidVal] = useState(0)

  const [realtimeBidData, setRealtimeBidData] = useState(null)

  const productInfo = productData?.product_info
    ? JSON.parse(productData?.product_info)
    : {}

  const countDown = useCoundDown(productInfo?.endDate * 1 - moment().valueOf())

  const stopAuctionFirebase = (aucId) => {
    if (!productInfo) return
    Auction.stopAuctions(aucId)
  }

  const stopAuctionContract = () => {
    try {
      const contract_MM = new web3Local.eth.Contract(
        JSON.parse(productData?.abi),
        productData?.address
      )
      contract_MM.methods.auctionEnd().send({
        from: userData?.address,
        gas: 200000
      })
      localStorage.setItem("AUCTION_END_PENDING", id)
    } catch (err) {
      console.log("END AUCTION", err)
    }
  }

  const getProductDetails = async () => {
    try {
      const res = await Auction.getListAuction()
      let item = res?.find((item) => item?.id === id)
      setProductData(item)
    } catch (err) {
      console.log("GET DETAIL ERR", err)
    }
  }
  const pushNewBiddingToDB = () => {
    const bid = localStorage.getItem("bid_value")
    const address = localStorage.getItem("user_address")
    const name = localStorage.getItem("name")
    if (bid > 0 && address && name) {
      Auction.createBid(id, {
        player_address: address,
        bid_value: bid * 1,
        name: name
      })
      Auction.updateAuctionDashboard({
        address: address,
        bid_value: bid * 1,
        name: name,
        auction_id: id
      })
      localStorage.setItem("bid_value", 0)
      localStorage.setItem("user_address", null)
      localStorage.setItem("name", null)
    }
  }

  const handleCreateBidding = async () => {
    if (!userData?.address) {
      toast.error("Vui l??ng ????ng nh???p tr?????c khi ?????u gi??!", {
        position: "top-center",
        autoClose: 5000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      })
      return
    }
    try {
      const contract_MM = new web3Local.eth.Contract(
        JSON.parse(productData?.abi),
        productData?.address
      )
      contract_MM.methods.bid().send({
        from: userData?.address,
        value: getWei(bidVal),
        gas: 500000
      })
      localStorage.setItem("bid_value", getWei(bidVal))
      localStorage.setItem("user_address", userData?.address)
      localStorage.setItem("name", userData?.name)
    } catch (err) {
      console.log("CREATE BID ERR", err)
    }
  }

  React.useEffect(() => {
    getProductDetails()
  }, [id])

  React.useEffect(() => {
    if (productData?.abi) {
      try {
        web3_infura.eth.getBlockNumber((err, num) => {
          if (err) {
            return 0
          }
          try {
            if (num) {
              const contract_Infura = new web3_infura.eth.Contract(
                JSON.parse(productData?.abi),
                productData?.address
              )
              contract_Infura.events.bidFailed(
                { filter: {}, fromBlock: num },
                (err, data) => {
                  if (err) {
                    console.log("BID ERROR", err)
                    toast.error("?????u gi?? th???t b???i", {
                      position: "top-center",
                      autoClose: 5000,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined
                    })
                  } else {
                    toast.error(
                      "?????u gi?? th???t b???i:" + data?.returnValues?.["0"],
                      {
                        position: "top-center",
                        autoClose: 5000,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined
                      }
                    )
                  }
                }
              )
              contract_Infura.events.endAuctionEvent(
                { filter: {}, fromBlock: num },
                (err, data) => {
                  if (err) {
                    console.log("END AUCTION ERROR", err)
                    toast.error("K???t th??c ?????u gi?? th???t b???i", {
                      position: "top-center",
                      autoClose: 5000,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined
                    })
                  } else {
                    let auctionId = localStorage.getItem("AUCTION_END_PENDING")
                    console.log("AUCTION END SUCCESS", auctionId)
                    if (auctionId) {
                      stopAuctionFirebase(auctionId)
                      localStorage.setItem("AUCTION_END_PENDING", null)
                    }
                  }
                }
              )
              contract_Infura.events.endAuctionEventFailed(
                { filter: {}, fromBlock: num },
                (err, data) => {
                  if (err) {
                    console.log("END AUCTION ERROR", err)
                    toast.error("K???t th??c ?????u gi?? th???t b???i", {
                      position: "top-center",
                      autoClose: 5000,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined
                    })
                  } else {
                    console.log("END AUCTION ERROR SUCCESS", data)
                    localStorage.setItem("AUCTION_END_PENDING", null)
                    toast.error(
                      "K???t th??c ?????u gi?? th???t b???i:" + data?.returnValues?.["0"],
                      {
                        position: "top-center",
                        autoClose: 5000,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined
                      }
                    )
                  }
                }
              )
              contract_Infura.events.bidEvent(
                { filter: {}, fromBlock: num },
                (err, data) => {
                  if (err) {
                    console.log("BID ERROR", err)
                    toast.error("?????u gi?? th???t b???i", {
                      position: "top-center",
                      autoClose: 5000,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined
                    })
                  } else {
                    pushNewBiddingToDB()
                    const bid = localStorage.getItem("bid_value")
                    if (bid > 0) {
                      toast.success("?????u gi?? th??nh c??ng", {
                        position: "top-center",
                        autoClose: 5000,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined
                      })
                    }
                  }
                }
              )
            }
          } catch (err) {
            console.log("CONNECT INFURA ERROR", err)
          }
        })
      } catch (err) {
        toast.error("?????u gi?? th???t b???i", {
          position: "top-center",
          autoClose: 5000,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        })
      }
    }
  }, [productData, userData])

  React.useEffect(() => {
    Auction.registerListenAuctionsChange(id, (snapshot) => {
      setRealtimeBidData(snapshot?.val())
    })
    return () => {
      Auction.unRegisterListenAuctionsChange(id)
    }
  }, [])

  React.useEffect(() => {
    if (
      productInfo?.endDate * 1 < moment().valueOf() &&
      productData?.owner?.toLowerCase() === userData?.address &&
      localStorage.getItem("AUCTION_END_PENDING") !== id
    ) {
      SlideInModal.show(
        () => {},
        <EndAuctionModal
          onSubmit={() => {
            SlideInModal.hide()
            stopAuctionContract()
          }}
        />,
        "static"
      )
    }
  }, [countDown])

  const getWei = (val) => {
    return val * 1000000000000000000
  }
  const getEth = (val) => val / Math.pow(10, 18)

  return (
    <section className="shop-details-area ptb-100">
      <div className="container ptb-100">
        <div className="shop-details">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-lg-5 col-md-12">
              <img
                style={{ maxHeight: 300, width: "100%", objectFit: "contain" }}
                src={productInfo?.images?.[imgIndex]}
              />
              <div className="row mt-2">
                {productInfo?.images?.map((item, index) => (
                  <div
                    onClick={() => {
                      setImgIndex(index)
                    }}
                    className="col-lg-3 col-md-3"
                    key={index}
                  >
                    <img
                      className={
                        "prod-image" +
                        (imgIndex === index ? " prod-image-active" : "")
                      }
                      src={item}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-7 col-md-12">
              <div className="product-entry-summary">
                <h3>{productInfo?.prodName}</h3>
                <h4>
                  Gi?? kh???i ??i???m:
                  {" " + productInfo?.initBidValue + " "}
                  ETH
                </h4>
                <h4 className="text-success">
                  Gi?? hi???n t???i:
                  {" " +
                    getEth(
                      realtimeBidData?.max_bid || productData?.max_bid
                    )}{" "}
                  ETH
                </h4>

                <p>{productInfo?.introduce}</p>

                {/* <ul className="product-categories">
                  <li>Categories:</li>
                  <li>
                    <a href="#">Books</a>,
                  </li>
                  <li>
                    <a href="#">Art</a>
                  </li>
                </ul> */}

                <form>
                  <input
                    type="number"
                    name="quantity"
                    className="form-control"
                    value={bidVal}
                    min={realtimeBidData?.max_bid}
                    max={999999999}
                    contentEditable={false}
                    onChange={(e) => setBidVal(e.target.value)}
                  />
                  <button
                    disabled={
                      realtimeBidData?.status === AUCTION_STATUS.ENDED ||
                      realtimeBidData?.status === AUCTION_STATUS.STOP
                    }
                    className="btn btn-primary"
                    onClick={(e) => {
                      e.preventDefault()
                      if (getWei(bidVal) <= realtimeBidData?.max_bid) {
                        toast.error(
                          "Gi?? ?????u gi?? ph???i cao h??n so v???i gi?? hi???n t???i!",
                          {
                            position: "top-center",
                            autoClose: 5000,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined
                          }
                        )
                        return
                      }
                      console.log(bidVal, productInfo)

                      if (
                        getWei(bidVal) <= getWei(productInfo?.initBidValue * 1)
                      ) {
                        toast.error(
                          "Gi?? ?????u gi?? ph???i cao h??n so v???i gi?? kh???i t???o!",
                          {
                            position: "top-center",
                            autoClose: 5000,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined
                          }
                        )
                        return
                      }
                      handleCreateBidding()
                      setBidVal(0)
                    }}
                  >
                    ?????u gi??
                  </button>
                  {realtimeBidData?.status === AUCTION_STATUS.ENDED ||
                  realtimeBidData?.status === AUCTION_STATUS.STOP ? (
                    <p className="text-danger mt-1">
                      {realtimeBidData?.status === AUCTION_STATUS.ENDED
                        ? `???? h???t th???i gian ?????u gi??`
                        : "?????u gi?? ???? k???t th??c"}
                    </p>
                  ) : null}
                </form>
              </div>
            </div>
          </div>

          <Description
            isEnded={
              realtimeBidData?.status === AUCTION_STATUS.ENDED ||
              realtimeBidData?.status === AUCTION_STATUS.STOP
            }
            data={productInfo}
            players={Object.values(realtimeBidData?.players || {})}
          />
        </div>
      </div>

      <RelatedProducts />
    </section>
  )
}

export default DetailsBody
