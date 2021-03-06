import { createSelector } from "reselect"

export const common = (state) => state.common

export const getCodeLanguage = createSelector(common, (data) => {
  return data.codeLanguage || "vi"
})

export const getLanguage = createSelector(common, (data) => {
  return data.language || "vi"
})

export const getReadNotify = createSelector(common, (data) => {
  return data.readNotify || false
})

export const getFacebookSelector = createSelector(common, (data) => {
  return data.facebookInfo || false
})
