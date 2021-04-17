import { createReducer } from '@reduxjs/toolkit'
import actions from './actions'


const modalReducer = createReducer(false, {
    [actions.changeShowModal]: (_, { payload }) => payload,
  })
export default { modalReducer }
