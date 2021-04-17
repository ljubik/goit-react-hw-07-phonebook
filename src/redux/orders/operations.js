import {
  getOrdersRequest,
  getOrdersSuccess,
  getOrdersError,
  addOrderRequest,
  addOrderSuccess,
  addOrderError,
  deleteOrderRequest,
  deleteOrderSuccess,
  deleteOrderError,
} from './actions'

import axios from 'axios'
axios.defaults.baseURL = `http://localhost:4000`

const getOrders = () => (dispatch) => {
  dispatch(getOrdersRequest())
  return axios
    .get('/contacts')
    .then(({ data }) => {
      console.log('getOrdersSuccess', data)
      return dispatch(getOrdersSuccess(data))
    })
    .catch((error) => {
      return dispatch(getOrdersError(error))
    })
}

const addOrder = (contacts) => (dispatch) => {
  dispatch(addOrderRequest())
  axios
    .post('/contacts', contacts)
    .then(({ data }) => {
      console.log('addOrderSuccess', data)
      return dispatch(addOrderSuccess(data))
    })
    .catch((error) => {
      return dispatch(addOrderError(error))
    })
}

// const updateOrder = (id) => dispatch =>{
//     dispatch()
//     axios.update('/')
// }

const deleteOrder = (id) => (dispatch) => {
  dispatch(deleteOrderRequest())
  axios
    .delete(`/contacts/${id}`)
    .then(({ data }) => {
      console.log('DELETE from deleteOrder', data)
      return dispatch(deleteOrderSuccess(id))
    })
    .catch((error) => {
      return dispatch(deleteOrderError(error))
    })
}

export default { getOrders, addOrder, deleteOrder }
