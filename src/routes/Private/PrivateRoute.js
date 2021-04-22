// создать компонент роута с пропсами из объекта роута
// рендерить Роут с распыленными пропсами роута и пропсом рендер
// с условным рендером Компонента роута или редиректа на страницу логинизации
// условие - авторизирован или нет, которое берем из стора через селектор

import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import selectors from '../../redux/auth/selectors'

const PrivateRoute = ({ isAuth, component: MyComp, ...routeProps }) => {
  return (
    <Route
      {...routeProps}
      render={(props) =>
        isAuth ? <MyComp {...props} /> : <Redirect to="/login" />
      }
    />
  )
}
const mapStateToProps = (store) => ({ isAuth: selectors.isAuth(store) })
export default connect(mapStateToProps)(PrivateRoute)
