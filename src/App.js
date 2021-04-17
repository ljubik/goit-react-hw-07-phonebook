import "./App.css";
import React, { Component, Suspense } from "react";
import axios from 'axios'
import Main from "./components/Main/Main";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";

import { connect } from "react-redux";
import addUserAction from "./redux/actions/userAction";
import filterAction from "./redux/actions/filterAction";
import actions from './redux/modal/actions';
import operations from './redux/orders/operations';
import { getOrders, filteredOrders } from './redux/orders/selectors';


class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };
  
  addContact = (el) => {
    console.log("add contact check",this.props)
    const { contacts } = this.props;
    const twin = contacts.some((c) => c.name === el.name);
    twin
      ? alert(`Увага дане імя уже використовується!` )
      : this.setState((prev) => {
          return {
            // contacts: [...prev.contacts, el],
          };
        });
  };

  getValue = (el) => {
    this.setState({ [el.name]: el.value });
  };

  toGetFilteredContacts = () => {
    const { contacts, filter } = this.props;
    const filteredContacts = contacts.filter((el) => {
      return el.name.toLowerCase().includes(filter);
    });

    return filteredContacts;
  };

  getList = () => {
    const { contacts, filter } = this.state;
    const filteredContacts = this.toGetFilteredContacts();
    if (filter) return filteredContacts;
    return contacts;
  };

  toDelete = (id) => {
    this.setState((prev) => {
      const contacts = prev.contacts.filter((el) => !(el.id === id));
      return { contacts };
    });
  };

  componentDidMount() {
    console.log("---------------",this.props.getMyOrders)
    const contactLocalStorege = JSON.parse(localStorage.getItem("contacts"));
    if (contactLocalStorege) {
      this.setState(() => ({ contacts: [...contactLocalStorege] }));
      return;
    }
    this.props.getMyOrders()
    
// axios.defaults.baseURL = `http://localhost:4000`
// axios
//     .get('/contacts')
//     .then(({ data }) => {
//       console.log('+++++++++s', data)
//        })
//     .catch((error) => {
//       console.log('+++++---------++++s', error)
//     })


  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { getValue, getList} = this;
    const {
      myOrders,
      addMyOrder,
      getMyOrders,
      deleteMyOrder,
      getMyFilter,
      filteredOrders,
} = this.props
    // console.log("this.props.getMyOrders", this.props.getMyOrders())
    // console.log("this.props", this.props);
    // console.log("this.props.contacts", this.props.contacts);

    return (
      <div className="App">
        <Main title="Телефонна книжка v.1.4"/>
        <ContactForm  
          getValue={getValue} 
          myOrders={myOrders}
          addMyOrder={addMyOrder}
          getMyOrders={getMyOrders}
          
          
        />
        <h2 className="pApp">Пошук контактів </h2>
        <Filter 
          filterContact={getValue} 
          getMyOrders={getMyOrders}
          getMyFilter={getMyFilter}
          filteredOrders={filteredOrders}
        />
        <ContactList 
          contacts={getList()}
          getMyOrders={getMyOrders} 
          deleteMyOrder={deleteMyOrder}
        />
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  console.log("store", store);

  return {
    // contacts: store.contacts,
    filter : store.filteredContacts,
    contacts: getOrders(store)
  };
};

const mapDispatchToProps = {
  adnum: addUserAction.addNumber,
  delnum: addUserAction.deleteNumber,
  filter: filterAction.filter,
  myChangeModal: actions.changeShowModal,
  getMyOrders: operations.getOrders,
  addMyOrder: operations.addOrder,
  deleteMyOrder: operations.deleteOrder,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
