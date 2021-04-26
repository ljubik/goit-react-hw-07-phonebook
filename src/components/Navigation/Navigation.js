import React from 'react'
import PropTypes from 'prop-types'
import s from './Navigation.module.css'
import { v4 as genId } from 'uuid'
import { NavLink } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import operations from '../../redux/auth/operations'
import selectors from '../../redux/auth/selectors'

const links = {
  active: {
    color: 'red',
  },
  unActive: {
    color: 'green',
  },
}
const Navigation = ({ links, myUserName, myLogout, isAuth }) => {
  return (
    <>
      <ul className={s.navList}>
        {/* <li>
          <NavLink to="/" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" exact>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contacts" exact>
            Contacts
          </NavLink>
        </li> */}
        {links.map((el) => {
          const { props, name } = el
          return (
            <li key={genId()}>
              <NavLink
                {...props}
                className={s.NavLink}
                activeClassName={s.NavLinkActive}
              >
                {name}
              </NavLink>
            </li>
          )
        })}
      </ul>
      {isAuth && (
        <div>
          <span>Welcome, {myUserName}</span>
          <Button type="button" variant="danger" onClick={()=>myLogout()}>
            Logout
          </Button>
        </div>
      )}
    </>
  )
}
const mapStateToProps = (store) => ({
  myUserName: selectors.userName(store),
  isAuth: selectors.isAuth(store),
})
const mapDispatchToProps = {
  myLogout: operations.signout,
}
export default connect(mapStateToProps, mapDispatchToProps)(Navigation)

Navigation.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      props: PropTypes.shape({
        name: PropTypes.string,
        path: PropTypes.string,
      }),
    }),
  ),
}
