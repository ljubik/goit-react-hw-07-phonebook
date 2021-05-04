// import React, { Component } from 'react'
// import { Form, Button } from 'react-bootstrap'
// import { connect } from 'react-redux'
// import operations from '../../redux/auth/operations'
// import style from "./Login.module.css";

// class LoginPage extends Component {
//   state = { email: '', password: '' }
//   handleChange = (e) => {
//     const { name, value } = e.target
//     this.setState({ [name]: value })
//   }
//   handleSubmit = (e) => {
//     e.preventDefault()
//     this.props.myProp({ ...this.state })
//     this.setState({ email: '', password: '' })
    
//   }

//   render() {
//     const { email, password } = this.state
//     const { handleChange, handleSubmit } = this
//     return (
//       <Form onSubmit={handleSubmit} className={style.home}>
//         <Form.Group controlId="formBasicEmail">
//           <Form.Label>Email address</Form.Label>
//           <Form.Control
//             type="email"
//             placeholder="Enter email"
//             name="email"
//             value={email}
//             onChange={handleChange}
//           />
//         </Form.Group>

//         <Form.Group controlId="formBasicPassword" className={style.home}>
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             type="password"
//             placeholder="Password"
//             name="password"
//             value={password}
//             onChange={handleChange}
//           />
//         </Form.Group>

//         <Button variant="primary" type="submit">
//           Submit
//         </Button>
//       </Form>
//     )
//   }
// }
// const mapDispatchToProps = {
//   myProp: operations.signin,
// }
// export default connect(null, mapDispatchToProps)(LoginPage)

import React, { Component, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { connect, useDispatch } from 'react-redux'
import operations from '../../redux/auth/operations'
import { Route, Redirect } from 'react-router-dom'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [myRedirect, setMyRedirect] = useState('')
  const dispatch = useDispatch()

  const handleChange = (e) => {
    const { name, value } = e.target
    // this.setState({ [name]: value })
    name === 'email' ? setEmail(value) : setPassword(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // this.props.myProp({ ...this.state })
    dispatch(operations.signin({ email, password }))
    // this.setState({ email: '', password: '' })
    setEmail('')
    setPassword('')
    setTimeout(setMyRedirect("true"), 5000);
  }

  const onClick = () => {
    setMyRedirect("true")
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={onClick}>
          Back
      </Button>
      <Button variant="primary" type="submit">
        Submit
      </Button>
        {myRedirect ? <Redirect to="/"/> : <Redirect to="/login"/>}
    </Form>
  )
}
