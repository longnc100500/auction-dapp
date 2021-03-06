import intlMessagesEN from "./i18n/localization/en.json"
import intlMessagesVi from "./i18n/localization/vi.json"

import authSaga from "./store/auth/sagas"
import formSignUpSaga from "./store/formSignUp/sagas"
import formForgotPasswordSaga from "./store/formForgotPassword/sagas"
import formVerifyAccountSaga from "./store/formVerifyAccount/sagas"
import formForgotUsernameSaga from "./store/formForgotUsername/sagas"
import accountListSaga from "./store/accountList/sagas"

import authRedux from "./store/auth/reducer"
import formSignUpReducer from "./store/formSignUp/reducer"
import formForgotPasswordReducer from "./store/formForgotPassword/reducer"
import formVerifyAccountReducer from "./store/formVerifyAccount/reducer"
import formForgotUsernameReducer from "./store/formForgotUsername/reducer"
import AccountListReducer from "./store/accountList/reducer"

export default {
  name: "Authenticate",
  dir: "Authenticate",
  pathRoot: "",
  routes: [
    {
      url: "forgot-password",
      component: "Page/ForgotPassword",
      meta: {
        authRoute: true
      },
      props: {
        title: "Quên mật khẩu | Tâm Trí Lực",
        titleI18n: "Authenticate:title1"
      }
    },
    {
      url: "signup/:invite_code",
      component: "Page/Signup",
      meta: {
        authRoute: true
      },
      props: {
        title: "Đăng ký | Tâm Trí Lực",
        titleI18n: "Authenticate:title2"
      }
    },
    {
      url: "verify/:type",
      component: "Page/VerifyAccount",
      meta: {
        authRoute: true
      },
      props: {
        title: "Xác thực tài khoản | Tâm Trí Lực",
        titleI18n: "Authenticate:title3"
      }
    }
  ],
  lang: { vi: intlMessagesVi, en: intlMessagesEN },
  isAuthenticate: "Any",
  sagas: [
    authSaga(),
    formSignUpSaga(),
    formForgotPasswordSaga(),
    formVerifyAccountSaga(),
    formForgotUsernameSaga(),
    accountListSaga()
  ],
  redux: {
    auth: authRedux,
    formSignUp: formSignUpReducer,
    formForgotPassword: formForgotPasswordReducer,
    formVerifyAccount: formVerifyAccountReducer,
    formForgotUsername: formForgotUsernameReducer,
    accountListReducer: AccountListReducer
  }
}
