import { lazy } from 'react'
import { v4 as uuid } from 'uuid'
import links from './db/naviate.json'

// const routes = [
//   {
//     key: uuid(),
//     exact: true,
//     path: '/',
//     // path: `${match.url}`,
//     component: lazy(() => import('./redux/Container/Container')),
//     private: true,
//     restricted: true,
//   },
//   {
//     key: uuid(),
//     exact: true,
//     path: '/contacts',
//     // path: `${match.url}`,
//     component: lazy(() => import('./components/ContactList/ContactList')),
//     private: true,
//     restricted: true,
//   },
//   {
//     key: uuid(),
//     exact: true,
//     path: '/addcontact',
//     // path: `${match.url}`,
//     component: lazy(() => import('./components/ContactForm/ContactForm')),
//     private: true,
//     restricted: true,
//   },
//   {
//     key: uuid(),
//     exact: true,
//     path: '/test',
//     // path: `${match.url}`,
//     component: lazy(() => import('./components/Main/Main')),
//     private: true,
//     restricted: true,
//   },
// ]

const routes = links.map((link) => {
  // console.log(link);
  const { id, component, props } = link
  return {
    private: props.private,
    restricted: props.restricted,
    exact: props.exact,
    path: props.to,
    component: lazy(() => import(`${component}`)),
    key: id,
  }
})

export default routes
