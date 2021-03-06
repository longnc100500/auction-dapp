import API from "../../configs/api"
import apiMethod from "@utility/ApiMethod"

export const getListService = ({ codeLanguage, payload }) => {
  return apiMethod.get(codeLanguage + API.GET_NEWS_LIST, {
    params: {
      ...payload
    }
  })
}

export const getNewsDetails = (id, type) => {
  if (type === "home") {
    return apiMethod.get(API.GET_HOME_NEWS_DETAILS + `/${id}`)
  }
  return apiMethod.get(API.GET_NEWS_DETAILS + `/${id}`)
}
