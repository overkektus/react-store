import { createAction, createReducer } from 'redux-act'
import axios from 'axios'
import _ from 'lodash'
import { API, GOODS_LIMIT } from '../service'

export const REDUCER = 'GOODS'
const NS = `${REDUCER}__`

const initialState = {
  items: [],
  page: 1,
  isListOver: false,
  isLoading: false,
}

const reducer = createReducer({}, initialState)

const readRequest = createAction(`${NS}READ_REQUEST`);
reducer.on(readRequest, (state) => ({
  ...state,
  isLoading: true,
}))

const readSuccess = createAction(`${NS}READ_SUCCESS`)
reducer.on(readSuccess, (state, { items, page, isListOver }) => {
  return {
    ...state,
    items: page === 1 ? items : [ ...state.items, ...items],
    page,
    isListOver,
    isLoading: false
  }
})

const readFailure = createAction(`${NS}READ_FAILURE`)
reducer.on(readFailure, (state) => ({
  ...state,
  isLoading: false
}))

export const readGoods = ({ isLoadMore } = { isLoadMore: false }) => (dispatch, getState) => {
  const state = getState()
  const page = isLoadMore ? state.goods.page + 1 : 1
  dispatch(readRequest())
  return axios
    .get(`${API}goods/?_page=${page}&&_limit=${GOODS_LIMIT}`)
    .then(({ status, statusText, data, headers }) => {
      if(status !== 200) {
        throw new Error(statusText)
      }
      const isListOver = parseInt(headers['x-total-count'], 10) === page * GOODS_LIMIT
      dispatch(readSuccess({ items : data, page, isListOver }))
    })
    .catch(error => {
      dispatch(readFailure())
      return Promise.reject(error)
    })
}

export default reducer
