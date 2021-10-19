import React from "react"
import intro1 from "../assets/images/intro1.png"
import intro2 from "../assets/images/intro2.png"
import intro3 from "../assets/images/intro3.png"
import intro4 from "../assets/images/intro4.png"

const isServer = typeof window === "undefined"
const WOW = !isServer ? require("wowjs") : null

const Intro = () => {
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
    <div className="intro-wrapper wow fadeInLeft" data-wow-delay="0.5s">
      <img src={intro1} className="intro-image-1" />
      <img src={intro2} className="intro-image-2 " />
      <img src={intro3} className="intro-image-3" />
      <img src={intro4} className="intro-image-4" />
      <div className="intro-top-side">
        <span className="wow fadeInLeft" data-wow-delay="1s">
          Cùng Bộ Tứ Siêu Trí Nhớ
          <br />
          trải nghiệm những chương trình học bổ ích, thú vị tại
          <br />
          <h3 className="m-0">Siêu Trí Nhớ Học Đường</h3>
          và đừng quên lan tỏa những điều tốt đẹp này
          <br />
          đến với tất cả mọi người
        </span>
      </div>
      <div className="intro-bottom-side wow fadeInRight" data-wow-delay="1.3s">
        <span>
          Hãy chia sẻ thật nhiều để trở thành Đại Sứ Siêu Trí Nhớ Học Đường
          <br />
          và có cơ hội nhận được những phần quà đặc biệt
          <br />
          có giá trị tiền mặt lên đến 5.000.000 VNĐ.
        </span>
      </div>
    </div>
  )
}
export default Intro