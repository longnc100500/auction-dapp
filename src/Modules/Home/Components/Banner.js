import React, { useState, useEffect } from "react"
import Carousel from "react-owl-carousel3"
import {
  getListSelector,
  getListLoadingSelector
} from "../Store/BannerSlider/selector"

import { actions } from "../Store/BannerSlider/reducer"
import { useDispatch, useSelector } from "react-redux"

const banners = [
  "https://get.club/wp-content/uploads/2016/07/auction-banner-copy-1000x474.jpg",
  "https://get.club/wp-content/uploads/2016/07/auction-banner-copy-1000x474.jpg",
  "https://get.club/wp-content/uploads/2016/07/auction-banner-copy-1000x474.jpg"
]

const options = {
  autoplay: true,
  nav: false,
  loop: true,
  mouseDrag: true,
  autoplayHoverPause: true,
  responsiveClass: true,
  margin: 0,
  dots: true,
  lazyLoad: true,
  items: 1,
  autoHeight: true
}

const Banner = () => {
  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false)
  const listBanner = useSelector(getListSelector)
  const listBannerLoading = useSelector(getListLoadingSelector)

  const openModal = () => {
    setIsOpen(true)
  }

  React.useEffect(() => {
    dispatch(
      actions.getList({
        page: 1,
        limit: 4
      })
    )
  }, [])

  return (
    <div style={{ background: "white" }} className="main-banner">
      <Carousel className="blog-slides owl-carousel owl-theme" {...options}>
        {banners?.map((item, index) => (
          <div key={index} className="col-lg-12 col-md-12">
            <div className="bg__slider">
              <img src={item} alt="blog-image" />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default Banner
