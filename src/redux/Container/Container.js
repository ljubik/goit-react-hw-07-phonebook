import { Component } from 'react';
import { connect } from 'react-redux';
import operations from '../../redux/orders/operations';
import { getOrders, filterOrder, filteredOrders } from '../../redux/orders/selectors';
// import selectors from '../../redux/orders/selectors'
import App from '../../App'


class PhoneBookContainer extends Component {
    componentDidMount() {
        const {getMyOrders} = this.props;
        getMyOrders()
    };

    render() {
        const {
            myOrders,
            addMyOrder,
            getMyOrders,
            deleteMyOrder,
            getMyFilter,
            contacts,
      } = this.props
        return <App 
            contacts={contacts}
            getMyFilter={getMyFilter}
            myOrders={myOrders}
            addMyOrder={addMyOrder}
            getMyOrders={getMyOrders}
            deleteMyOrder={deleteMyOrder}

        />
    };
};

const mapStateToProps = state => ({
    contacts: getOrders(state),
    filter: filterOrder(state),
    filteredOrders: filteredOrders(state)
  });
  
  const mapDispatchToProps = dispatch => ({
    getMyOrders: operations.getOrders,
    addMyOrder: operations.addOrder,
    deleteMyOrder: operations.deleteOrder,
  })

export default connect(mapStateToProps, mapDispatchToProps)(PhoneBookContainer);