import { createAction } from '@reduxjs/toolkit'

export const getOrdersRequest = createAction('GET_ORDERS_REQUEST')
export const getOrdersSuccess = createAction('GET_ORDERS_SUCCESS')
export const getOrdersError = createAction('GET_ORDERS_ERROR')

export const addOrderRequest = createAction('ADD_ORDER_REQUEST')
export const addOrderSuccess = createAction('ADD_ORDER_SUCCESS')
export const addOrderError = createAction('ADD_ORDER_ERROR')

export const updateOrderRequest = createAction('UPDATE_ORDER_REQUEST')
export const updateOrderSuccess = createAction('UPDATE_ORDER_SUCCESS')
export const updateOrderError = createAction('UPDATE_ORDER_ERROR')

export const deleteOrderRequest = createAction('DELETE_ORDER_REQUEST')
export const deleteOrderSuccess = createAction('DELETE_ORDER_SUCCESS')
export const deleteOrderError = createAction('DELETE_ORDER_ERROR')

export const filterAction = createAction('FILTER_ORDERS')
