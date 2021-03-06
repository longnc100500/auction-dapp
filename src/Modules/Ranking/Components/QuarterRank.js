import React, { useState } from "react"
import goldRank from "../assets/images/gold.png"
import silverRank from "../assets/images/silver.png"
import diamondRank from "../assets/images/diamond.png"
import rank1 from "../assets/images/rank1.png"
import rank2 from "../assets/images/rank2.png"
import rank3 from "../assets/images/rank3.png"

import { SeemoreButton, RankingTopBannerTitle, CoinIcon } from "../assets/icon"
import { Col, Row, Collapse } from "reactstrap"
import AsyncImage from "../../../components/AsyncImage"
import moment from "moment"
import defaultAvatar from "../../../assets/images/default-avatar.jpg"

const isServer = typeof window === "undefined"
const WOW = !isServer ? require("wowjs") : null
const YearRank = ({ data = [] }) => {
  const [isCollapse, setIsCollapse] = useState(false)
  React.useEffect(() => {
    new WOW.WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 20,
      mobile: true,
      live: true
    }).init()
  }, [])
  return (
    <div className="ranking1-container">
      <div className="ranking-top-banner-title">
        <RankingTopBannerTitle />
      </div>
      <div className="ranking1-top-label">
        Quý {moment().quarter()} <br />
        Năm {moment().year()}
      </div>
      <div className="medal-container">
        <Row
          className="row-medal-container"
          style={{ border: "1px solid #f16c1c" }}
        >
          <Col xl="3" lg="3" md="3" sm="3" xs="3">
            <div
              className="medal-item-wrapper wow animate__bounceInUp"
              data-wow-delay="0.8s"
            >
              <div className="medal-image-wrapper">
                <div className="diamond-medal-image-wrapper">
                  <img
                    src={diamondRank}
                    alt="image"
                    className="diamond-medal-image"
                  />
                  <AsyncImage
                    src={data[1]?.avatar || defaultAvatar}
                    className="top-2-avatar"
                    placeholderClassName="top-2-avatar-loading"
                  />
                  <img src={rank2} className="diamon-rank-text" />
                </div>
              </div>
              <div className="medal-info-wrapper">
                <p className="medal-name">
                  {data[1]?.childFullName1 || "Hạng Nhì"}
                </p>
                {data[1]?.level?.name && data[1]?.quarterYearPoint ? (
                  <span className="d-flex flex-row justify-content-center">
                    <p className="medal-level">{`${
                      data[1]?.inviteUserCount
                        ? "Cấp " + data[1]?.inviteUserCount + " | "
                        : ""
                    }  ${data[1]?.quarterYearPoint || ""}K`}</p>
                    <CoinIcon />
                  </span>
                ) : null}
              </div>
            </div>
          </Col>
          <Col xl="6" lg="6" md="6" sm="6" xs="6">
            <div
              className="medal-item-wrapper wow animate__bounceInUp"
              data-wow-delay="1.2s"
            >
              <div className="medal-image-wrapper">
                <div className="gold-medal-image-wrapper">
                  <AsyncImage
                    src={data[0]?.avatar || defaultAvatar}
                    className="top-1-avatar"
                    placeholderClassName="top-1-avatar-loading"
                  />
                  <img src={rank1} className="gold-rank-text" />
                  <img
                    src={goldRank}
                    alt="image"
                    className="gold-medal-image"
                  />
                </div>
              </div>
              <div className="gold-medal-info-wrapper">
                <p className="medal-name">
                  {data[0]?.childFullName1 || "Hạng Nhất"}
                </p>
                {data[0]?.level?.name && data[0]?.quarterYearPoint ? (
                  <span className="d-flex flex-row justify-content-center">
                    <p className="medal-level">{`${
                      data[0]?.inviteUserCount
                        ? "Cấp " + data[0]?.inviteUserCount + " | "
                        : ""
                    }  ${data[0]?.quarterYearPoint || ""}K`}</p>
                    <CoinIcon />
                  </span>
                ) : null}
              </div>
            </div>
          </Col>
          <Col xl="3" lg="3" md="3" sm="3" xs="3">
            <div
              className="medal-item-wrapper wow animate__bounceInUp"
              data-wow-delay="0.4s"
            >
              <div className="medal-image-wrapper">
                <div className="silver-medal-image-wrapper">
                  <AsyncImage
                    src={data[2]?.avatar || defaultAvatar}
                    className="top-2-avatar"
                    placeholderClassName="top-2-avatar-loading"
                  />
                  <img src={rank3} className="silver-rank-text" />
                  <img
                    src={silverRank}
                    alt="image"
                    className="silver-medal-image"
                  />
                </div>
              </div>
              <div className="silver-medal-info-wrapper">
                <p className="medal-name">
                  {data[2]?.childFullName1 || "Hạng Ba"}
                </p>
                {data[2]?.level?.name && data[2]?.quarterYearPoint ? (
                  <span className="d-flex flex-row justify-content-center">
                    <p className="medal-level">{`${
                      data[2]?.inviteUserCount
                        ? "Cấp " + data[2]?.inviteUserCount + " | "
                        : ""
                    }${data[2]?.quarterYearPoint || ""}K`}</p>
                    <CoinIcon />
                  </span>
                ) : null}
              </div>
            </div>
          </Col>
        </Row>
        <Collapse isOpen={isCollapse}>
          <div className="listRankWrapper">
            <Row className="mt-5 listRankWrapper">
              <Col xl="6" lg="6" md="6" sm="6" xs="6">
                {data?.map((item, index) => {
                  return index > 2 && index < 7 ? (
                    <div className="another-rank-item d-flex flex-row">
                      <h1 className="rank-item__index">{index + 1}</h1>
                      <div className="rank-item_avatar-wrapper">
                        <AsyncImage
                          src={item?.avatar || defaultAvatar}
                          className="rank-item_avatar"
                          placeholderClassName="rank-item_avatar-loading"
                        />
                      </div>
                      <div className="rank-item__info-wrapper">
                        <p className="rank-item__level">{`Cấp ${item?.inviteUserCount}`}</p>
                        <p className="rank-item__name">
                          {item?.childFullName1}
                        </p>
                        <span className="d-flex flex-row align-items-center">
                          <p className="rank-item__point">{`${item?.quarterYearPoint}k`}</p>
                          <CoinIcon />
                        </span>
                      </div>
                    </div>
                  ) : null
                })}
              </Col>
              <Col xl="6" lg="6" md="6" sm="6" xs="6">
                {data?.map((item, index) => {
                  return index >= 7 ? (
                    <div className="another-rank-item d-flex flex-row">
                      <h1 className="rank-item__index">{index + 1}</h1>
                      <div className="rank-item_avatar-wrapper">
                        <AsyncImage
                          src={item?.avatar || defaultAvatar}
                          className="rank-item_avatar"
                          placeholderClassName="rank-item_avatar-loading"
                        />
                      </div>
                      <div className="rank-item__info-wrapper">
                        <p className="rank-item__level">{`Cấp ${item?.inviteUserCount}`}</p>
                        <p className="rank-item__name">
                          {item?.childFullName1}
                        </p>
                        <span className="d-flex flex-row align-items-center">
                          <p className="rank-item__point">{`${item?.quarterYearPoint}k`}</p>
                          <CoinIcon />
                        </span>
                      </div>
                    </div>
                  ) : null
                })}
              </Col>
            </Row>
          </div>
        </Collapse>
      </div>
      {data?.length > 3 ? (
        <div
          className="seemore_button"
          onClick={() => setIsCollapse(!isCollapse)}
        >
          <SeemoreButton />
          <div
            style={{
              position: "relative"
            }}
          >
            <p className="seemore-button-text">
              {!isCollapse ? "Xem thêm" : "Ẩn bớt"}
            </p>
          </div>
        </div>
      ) : null}
    </div>
  )
}
export default YearRank
