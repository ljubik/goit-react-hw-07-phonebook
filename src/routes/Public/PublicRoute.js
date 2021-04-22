// создать компонент роута с пропсами из объекта роута
// отдельно вывести рестриктед
// рендерить Роут с распыленными пропсами роута и пропсом рендер
// с условным рендером Компонента роута или редиректа на страницу логинизации
// условие - авторизирован или нет, которое берем из стора через селектор и рестриктед

import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import selectors from '../../redux/auth/selectors'

const PublicRoute = ({
  isAuth,
  restricted,
  component: MyComp,
  ...routeProps
}) => {
  return (
    <Route
      {...routeProps}
      render={(props) =>
        isAuth && restricted ? <Redirect to="/" /> : <MyComp {...props} />
      }
    />
  )
}
const mapStateToProps = (store) => ({ isAuth: selectors.isAuth(store) })

export default connect(mapStateToProps)(PublicRoute)
