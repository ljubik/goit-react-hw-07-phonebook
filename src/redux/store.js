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


const rootReducer = combineReducers({
  filter: filterReducer,
  contacts: allUsersReducer,
  user: userReducer,
  showModal: reducers.modalReducer,
  mycontacts: orderReducer.orderReducer,
  filterOrder: orderReducer.filterReducer,
}, localStorage.contacts);

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
