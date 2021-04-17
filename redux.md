## устанавливаем библиотеки

npm i redux react-redux

## создаем структуру

=1
папка redux
/actions
/reducers
store.js

=2
папка redux
/contacts
//actions
//reducers

/filter
//actions
//reducers

store.js

## создаем экшены

const addContact = (contact) => {
return {
type: "ADD_QUERY",
payload: { id: contact.id, name: contact.name, phone: contact.phone },
};
};

## создаем редюсеры

const filterReducer = (state = "", action) => {
switch (action.type) {
case "FILTER_CONTACT":
return action.payload;
default:
return state;
}
};

## создаем стор

import { createStore, combineReducers } from "redux";

const rootReducer = combineReducers({ contacts: contactReducer, filter: filterReducer });

const store = createStore(
rootReducer,
window.**REDUX_DEVTOOLS_EXTENSION** && window.**REDUX_DEVTOOLS_EXTENSION**()
);
export default store;

## заворачиваем все приложение в компонент Provider

в index.js
import { Provider } from "react-redux";
import store from "./redux/store";

передаем store пропами через Provider

## получаем доступ к глобальному стору к компонентах через HOC connect

import { connect } from "react-redux";

заворачиваем экспорт компонента в HOC connect и передаем
mapStateToProps для передачи свойств
mapDispatchToProps для передачи методов

## mapStateToProps

const mapStateToProps = (store) => {
return { query: store.query, gallery: store.gallery };
}

const mapDispatchToProps = { filterContact: filterAction.filterContacts };

connect(mapStateToProps, mapDispatchToProps)(Component)

connect(mapStateToProps)(Component)
connect(null, mapDispatchToProps)(Component)

##
