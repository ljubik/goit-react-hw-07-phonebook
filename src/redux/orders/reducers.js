import { createReducer } from '@reduxjs/toolkit'
import {
  getOrdersRequest,
  getOrdersSuccess,
  getOrdersError,
  addOrderRequest,
  addOrderSuccess,
  addOrderError,
  deleteOrderRequest,
  deleteOrderSuccess,
  deleteOrderErrors,
  filterAction,
} from './actions'

const orderReducer = createReducer([], {
  [getOrdersSuccess]: (_, { payload }) => payload,
  [addOrderSuccess]: (state, { payload }) => [...state, payload],
  [deleteOrderSuccess]: (state, { payload }) =>
    state.filter((order) => order.id !== payload),
})

const filterReducer = createReducer('', {
  [filterAction]: (_, { payload }) => payload,
})

export default { orderReducer, filterReducer }
