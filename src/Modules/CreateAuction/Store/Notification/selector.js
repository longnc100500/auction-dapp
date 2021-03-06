import { createSelector } from "reselect"
export const reducer = (state) => state.Notifications

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
export const getCountNotiSelector = createSelector(
  reducer,
  (data) => data?.count
)
export const getCountNotiLoadingSelector = createSelector(
  reducer,
  (data) => data?.countLoading || false
)
