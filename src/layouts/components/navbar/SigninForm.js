import React, { useState } from "react"
import { Form, Button, Spinner, Input } from "reactstrap"
import Web3 from "web3"
import { useDispatch, useSelector } from "react-redux"
import { useTranslation } from "react-i18next"

import { useHistory } from "react-router"

import { actions } from "../../../store/user/reducer"
import Auction from "../../../Firebase/Auction"
import User from "../../../Firebase/User"

const SignInForm = ({
  setIsDropdownOpen = () => {},
  address = "",
  signInCb = () => {}
}) => {
  const { i18n } = useTranslation()
  const history = useHistory()
  const dispatch = useDispatch()
  const [name, setName] = useState("")

  const onSubmit = () => {
    User.createUsers(
      {
        user_data: {
          address: address,
          name: name
        }
      },
      signInCb
    )
  }

  return (
    <div className="signin-form-container">
      <div
        style={{ width: "100%" }}
        className="d-flex flex-column align-items-center w-100 px-5 py-3"
      >
        <h2 style={{ fontWeight: "bold" }} className="text-dark mb-4">
          Đăng ký
        </h2>
        <Input
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Tên"
        />
        <Button onClick={onSubmit} color="primary" className="mt-4">
          Đăng ký
        </Button>
      </div>
    </div>
  )
}
export default SignInForm
