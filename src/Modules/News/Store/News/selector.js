import { createSelector } from "reselect"
export const reducer = (state) => state.News

export const getListLoadingSelector = createSelector(reducer, (data) => {
  return data?.loading || false
})

export const getListSelector = createSelector(
  reducer,
  (data) => data?.list || null
)

export const getLoadListMoreLoading = createSelector(
  reducer,
  (data) => data?.listMoreLoading || false
)

export const getHasLoadMoreSelector = createSelector(
  reducer,
  (data) => data?.hasLoadMore || false
)

export const getPageSelector = createSelector(reducer, (data) => data?.page)
