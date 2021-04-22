import { createStore, combineReducers } from "redux";
import userReducer from "../redux/reducers/userReducers";
import allUsersReducer from "./reducers/allUsersReducer";
import filterReducer from "./reducers/filterReducer";
// import function create store
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// export store
import reducers from './modal/reducers'
import orderReducer from './orders/reducers'
import logger from 'redux-logger'
import authReducer from './auth/reducers'

const config = {
  key: '123456',
  storage,
  whitelist: ['token'],
}

const rootReducer = combineReducers({
  filter: filterReducer,
  contacts: allUsersReducer,
  user: userReducer,
  showModal: reducers.modalReducer,
  mycontacts: orderReducer.orderReducer,
  filterOrder: orderReducer.filterReducer,
  auth: persistReducer(config, authReducer),
}, localStorage.contacts);

const middleware = [...getDefaultMiddleware(), logger]

const persistedState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState'))
  : {}

// const store = createStore(
//   rootReducer,
//   persistedState //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

const store = configureStore({
  reducer: {
    showModal: reducers.modalReducer,
    auth: persistReducer(config, authReducer),
    contacts: orderReducer.orderReducer,
    filterOrder: orderReducer.filterReducer,
  },
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
  ],
})

store.subscribe(()=>{
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

const persiststore = persistStore(store)
export { store, persiststore }
