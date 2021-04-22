import { createReducer, combineReducers } from '@reduxjs/toolkit'
import * as actions from './actions'
const state = { name: null, email: null }
const user = createReducer(state, {
  [actions.registerSuccess]: (_, { payload }) => payload.user,
  [actions.loginSuccess]: (_, { payload }) => payload.user,
  [actions.logoutSuccess]: () => state,
  [actions.getUserSuccess]: (_, { payload }) => payload,
})

const token = createReducer(null, {
  [actions.registerSuccess]: (_, { payload }) => payload.token,
  [actions.loginSuccess]: (_, { payload }) => payload.token,
  [actions.logoutSuccess]: () => null,
})

const error = createReducer(null, {
  [actions.registerError]: (_, { payload }) => payload,
  [actions.loginError]: (_, { payload }) => payload,
  [actions.logoutError]: (_, { payload }) => payload,
  [actions.getUserError]: (_, { payload }) => payload,
})

export default combineReducers({ user, token, error })
