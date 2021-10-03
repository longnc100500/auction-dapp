import API from "../../configs/api"
import apiMethod from "@utility/ApiMethod"

export const getListService = () => {
  return apiMethod.post(API.GET_HOME_RANK, { TopLimit: 10, TopType: 3 })
}
