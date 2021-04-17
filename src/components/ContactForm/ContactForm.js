import React, { Component } from "react";
import PropTypes from "prop-types";

import { v4 as id } from "uuid";
import style from "./ContactForm.module.css";

import { connect } from "react-redux";
import userAction from "../../redux/actions/userAction";
import operations from '../../redux/orders/operations';
import { getOrders } from '../../redux/orders/selectors';
// console.log(getOrders)
// console.log(operations)

class ContactForm extends Component {
  state = {
    name: "",
    tel: "",
    id: '',
  };

  handleChange = (e) => {
    const { getValue } = this.props;

    getValue(e.target);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    const { contacts} = this.props;
    e.preventDefault();
    const { name, tel } = this.state;
    const el = { id: id(), name, tel };

    if (!contacts.some((c) => c.name === el.name)){
 
      // this.props.addNumber(el);
    
    this.props.addMyOrder(el)
    
  }
    else {alert(`Увага дане імя уже використовується!` )}

    this.formReset();
  };

  formReset = () => { 
    this.setState({
      name: "",
      tel: "",
    });
  }

  render() {
    const { handleChange, handleSubmit, handleDelete, filterSubmit } = this;
    const { name, tel} = this.state;
    const { myOrders, addNumber} = this.props
    return (
      <form onSubmit={handleSubmit} className={style.form}>
        <input
          onChange={handleChange}
          type="text"
          name="name"
          id="name"
          placeholder="Ім'я"
          value={name}
          required
        />
        <input
          onChange={handleChange}
          type="number"
          name="tel"
          id="tel"
          placeholder="номер телефону"
          value={tel}

          required
        />
        <button type="submit" >Додати</button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  getValue: PropTypes.func.isRequired,
  // addContact: PropTypes.func.isRequired,
};


const mapStateToProps = (store) => {
  // console.log("store in contact form", store);

  return {
    // contacts: store.contacts,
    contacts: getOrders(store),
  };
};

const mapDispatchToProps = {
  addNumber: userAction.addNumber,
  // addNumber: operations.addOrder,
  addMyOrder: operations.addOrder,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
