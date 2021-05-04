import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import operations from '../../redux/auth/operations';
import style from "./Register.module.css";
import { Route, Redirect } from 'react-router-dom'


class RegisterPage extends Component {
  state = { name: '', email: '', password: '', myRedirect:false }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.myProp({ ...this.state })
    
    this.setState({ name: '', email: '', password: ''})
    setTimeout(this.setState({myRedirect:true}), 5000);
  }

  onClick = () =>{
    this.setState({ myRedirect:true })
  }

  render() {
    const { name, email, password, myRedirect } = this.state
    const { handleChange, handleSubmit, onClick } = this
    return (
      <Form onSubmit={handleSubmit} className={style.home}>
        <Form.Group controlId="formBasicName">
          <Form.Label>User name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </Form.Group>
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
        <Button variant="primary" type="submit" >
          Submit
        </Button>
        {myRedirect ? <Redirect to="/"/> : <Redirect to="/register"/>}
        {console.log(myRedirect)}
      </Form>
    )
  }
}
const mapDispatchToProps = {
  myProp: operations.signup,
}
export default connect(null, mapDispatchToProps)(RegisterPage)
