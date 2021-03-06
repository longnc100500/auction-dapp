import React from "react"
import { Col, Row, UncontrolledTooltip } from "reactstrap"
import {
  AchievementHeaderTitle,
  GoldIcon,
  CheckedIcon,
  UnCheckIcon
} from "../assets/icon"
import voi1 from "../assets/images/voicon.png"
import voi2 from "../assets/images/voichamchi.png"
import voi3 from "../assets/images/voidaisu-silver.png"
import voi4 from "../assets/images/voidaisu-gold.png"

import d1 from "../assets/images/d1.png"
import d2 from "../assets/images/d2.png"
import d3 from "../assets/images/d3.png"
import d4 from "../assets/images/d4.png"
import { getUserData, user } from "../../../store/user/selector"
import { useSelector } from "react-redux"
import { useMediaQuery } from "react-responsive"
import { CopyIcon, LinkIcon } from "../../Profile/assets/icon"
import { toast } from "react-toastify"

const data = [
  {
    title: "Lần đầu đăng nhập",
    subtitle: "Nhận Huy Hiệu Voi Con",
    point: 5,
    img: voi1,
    numToReach: 0,
    imgDisabled: d1
  },
  {
    title: "Mời thành công 05 bạn",
    subtitle: "Nhận Huy Hiệu Voi Chăm Chỉ",
    point: 5,
    img: voi2,
    numToReach: 5,
    imgDisabled: d2
  },
  {
    title: "Mời thành công 15 bạn",
    subtitle: "Nhận Huy Hiệu Voi Thông Minh",
    point: 10,
    img: voi4,
    numToReach: 15,
    imgDisabled: d3
  },
  {
    title: "Mời thành công 30 bạn",
    subtitle: "Nhận Huy Hiệu Voi Đại Sứ",
    point: 15,
    img: voi3,
    numToReach: 30,
    imgDisabled: d4
  }
]

const Achievement = () => {
  const userData = useSelector(getUserData)
  const isMobile = useMediaQuery({ maxWidth: 767 })
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1199 })
  return (
    <div className="achievement-container">
      <div className="achievement-top-header-wrapper">
        <AchievementHeaderTitle />
      </div>
      {data.map((item, index) => {
        const reached =
          userData?.flagDaisu === 1 &&
          item.numToReach <= userData?.inviteUserCount
        return (
          <div key={index} className="achivement-item-wrapper">
            <img
              className="achivement-item-image"
              src={reached ? item.img : item.imgDisabled}
            />
            <div className="achivement-item-info-wrapper">
              <p className="achivement-item-title">{item.title}</p>
              <p className="achivement-item-subtitle">{item.subtitle}</p>
              <span className="d-flex flex-row">
                <span className="achivement-item-point">
                  {`+${item.point}k`}
                  <GoldIcon />
                </span>
              </span>
            </div>
            {reached ? <CheckedIcon /> : <UnCheckIcon />}
          </div>
        )
      })}

      <div className="achievement-footer">
        <Row>
          <Col xl="6" lg="6" sm="6" xs="6">
            <span className="copy-btn-title">Mã giới thiệu</span>
            <div className="copy-field" id="CodeToolTips">
              <p>{userData?.codeInvite}</p>
              <div
                onClick={() => {
                  toast.success("Sao chép thành công", {
                    position: "top-center",
                    autoClose: 5000,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined
                  })
                  navigator.clipboard.writeText(userData?.codeInvite)
                }}
                className="copy-code-button"
              >
                {isMobile || isTablet ? <CopyIcon /> : "Sao chép"}
              </div>
              <UncontrolledTooltip placement="top" target="CodeToolTips">
                {userData?.codeInvite}
              </UncontrolledTooltip>
            </div>
          </Col>
          <Col xl="6" lg="6" sm="6" xs="6">
            <span className="copy-btn-title">Link giới thiệu</span>
            <div className="copy-field" id="LinkToolTips">
              <p>{`${window.location.origin}/signup/${userData?.codeInvite}`}</p>
              <div
                onClick={() => {
                  toast.success("Sao chép thành công", {
                    position: "top-center",
                    autoClose: 5000,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined
                  })
                  navigator.clipboard.writeText(
                    `${window.location.origin}/signup/${userData?.codeInvite}`
                  )
                }}
                className="copy-code-button"
              >
                {isMobile || isTablet ? <LinkIcon /> : "Sao chép"}
              </div>
            </div>
            <UncontrolledTooltip placement="top" target="LinkToolTips">
              {`${window.location.origin}/signup/${userData?.codeInvite}`}
            </UncontrolledTooltip>
          </Col>
        </Row>
      </div>
    </div>
  )
}
export default Achievement
