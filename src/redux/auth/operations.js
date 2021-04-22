import axios from 'axios'
import * as actions from './actions'
axios.defaults.baseURL = `https://goit-phonebook-api.herokuapp.com/`

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
  },
  unset() {
    axios.defaults.headers.common.Authorization = ``
  },
}

const signup = (user) => async (dispatch) => {
  dispatch(actions.registerRequest())
  try {
    const { data } = await axios.post(`users/signup`, user)
    // console.log(data)
    token.set(data.token)
    // console.log(data.token)
    dispatch(actions.registerSuccess(data))
  } catch (error) {
    // console.log(error.message)
    dispatch(actions.registerError(error.message))
  }
}

const signin = (user) => async (dispatch) => {
  dispatch(actions.loginRequest())
  try {
    const { data } = await axios.post(`users/login`, user)
    token.set(data.token)
    dispatch(actions.loginSuccess(data))
  } catch (error) {
    dispatch(actions.loginError(error.message))
  }
}

const signout = () => async (dispatch) => {
  dispatch(actions.logoutRequest())
  try {
    const r = await axios.post(`users/logout`)
    console.log(r)
    token.unset()
    dispatch(actions.logoutSuccess())
  } catch (error) {
    dispatch(actions.logoutError(error.message))
  }
}

const getUser = () => async (dispatch, getState) => {
  const {
    auth: { token: myToken },
  } = getState()
  if (!myToken) return
  dispatch(actions.getUserRequest())
  token.set(myToken)
  try {
    const r = await axios.get('users/current')
    console.log(r)
    dispatch(actions.getUserSuccess(r.data))
  } catch (err) {
    dispatch(actions.getUserError(err))
  }
}

export default { signup, signin, signout, getUser }
