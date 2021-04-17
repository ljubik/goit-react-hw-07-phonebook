import React, { Component } from "react";
import PropTypes from "prop-types";
import style from "./Filter.module.css";

import { connect } from "react-redux";
import userAction from "../../redux/actions/userAction";
import { filteredOrders } from '../../redux/orders/selectors';
import { filterAction } from '../../redux/orders/actions'

class Filter extends Component {
  state = {
    filter: "",
  };

  handleChange = (e) => {
    const { filterName} = this.props;
    this.setState({ [e.target.name]: e.target.value });
    filterName(e.target.value);
  };

  filterSubmit = (e) => {
    e.preventDefault()
    this.props.getMyFilter(this.state.filter)
  }

  render() {
    const { handleChange, filterSubmit } = this;
   
    const { filter, filteredOrders } = this.props;
    return (
      <>         
      <div className={style.filter}>Ваш останній запит {filter} </div> 
      <form className={style.form} onSubmit={filterSubmit}>
        <input
          id="filter"
          className={style.filter}
          onInput={handleChange}
          onChange={(e) => {
                  this.setState({ filter: e.target.value })
                  this.props.getMyFilter(e.target.value)
                }}
          type="text"
          name="filter"
          placeholder="Введіть імя"
          defaultValue={filter}
          // onSubmit={filterSubmit}
        />
      </form>
      </>
    );
  }
}

const mapStateToProps = (store) => {
  // console.log("store filter", store);

  return {
    contacts: store.contacts,
    // filter: store.filter,
    filter: store.filter,
  };
};

const mapDispatchToProps = {
  filterName: userAction.filterName,
  getMyFilter: filterAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
  // filterContact: PropTypes.func.isRequired,
};

