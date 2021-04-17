## устанавливаем пакет

npm i @reduxjs/toolkit

## в файле store.js

вместо функции createStore будем использовать

import { configureStore } from '@reduxjs/toolkit';

которая уже у себя содержит подключение к тулзам в хроме вместо
window.**REDUX_DEVTOOLS_EXTENSION** && window.**REDUX_DEVTOOLS_EXTENSION**()
или2-13 год
вместо функции composeWithDevTools(), подключаемой из библиотеки
redux-devtools-extension

process.env.NODE_ENV = 'development' || 'production'

const store = configureStore({
reducer: {},
devTools: process.env.NODE_ENV = 'development',
})

## npm i redux-logger

import { confugureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import logger from 'redux-logger';

const middleware = [...getDefaultMiddleware(), logger]

const store = confugureStore({
reducer: {},
middleware,
devTools: process.env.NODE_ENV = 'development',
})

## createAction

import { createAction } from '@reduxjs/toolkit';

<!-- simple action -->

const createAction = createAction('CREATE')
const deleteAction = createAction('DELETE')

export default {createAction,deleteAction}

<!-- action with update payload -->

const updatePayload = createAction('ADD', ({email. pass})=>{
return {
payload: {
id: genId(),
email,
pass
}
}
})

<!-- shorty -->

const updatePayload = createAction(type.name, ({email. pass})=>({
payload: {
id: genId(),
email,
pass
},
}))

## createReducer

import actions from './actions'
import { createReducer } from '@reduxjs/toolkit';

const deleteReducer = (state, action) => {
return state.filter(({id})=> id !== action.payload )
}

const initState = [] || '' || {}

### const pieceOfStore = createReducer(initState, {

'ADD': (state, {payload} )=>[...astate, payload],
'DELETE': deleteReducer,

})

### const pieceOfStore = createReducer(initState, {

[actions.createAction]: (state, {payload} )=>[...astate, payload],
[actions.deleteAction]: deleteReducer,

})

const filter = createReducer('', {
[actions.filter]: (\_, {payload})=>payload
})

## npm i redux-persist

import {persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

### const persistConfig = {

key: 'users',
storage
}

const rootReducer = combineReducers({
user: userReducer,
allUsers: allUsersReducer,
});

### const persistedReducer = persistReducer(persistConfig,rootReducer)

const middleware = [...getDefaultMiddleware({
serializableCheck: {
ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
},
}), logger]

const store = confugureStore({
reducer: \*\*persistedReducer,
middleware,
devTools: process.env.NODE_ENV = 'development',
})

### const persistStore = persistStore(store)

export default {store, persistStore}

### в файле index.js

import {PersistGate} from 'redux-persist/integration/react'

ReactDOM.render(
<React.StrictMode>
<Provider store={store.store}>
<PersistGate loading={null} persistor={store.persistor}>
<Router>
<App />
</Router>
</PersistGate>
</Provider>
</React.StrictMode>,
document.getElementById("root")
);
