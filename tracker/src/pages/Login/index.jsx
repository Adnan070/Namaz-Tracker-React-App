import Logo from '../../assets/img/logo-with-out-bg.png'
import '../../App.css'
import React, { useEffect } from 'react'
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Image,
  Row,
  Spinner,
} from 'react-bootstrap'

import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { loginUser } from '../../redux/actions/userAction'
// Import * as Yup from "yup";

import PropTypes from 'prop-types'

const Login = (props) => {
  const onSubmit = (e) => {
    e.preventDefault()
    const { target } = e,
      credential = {
        email: target[0].value,
        pass: target[1].value,
      }
    props.loginUser(credential)
  }

  useEffect(() => {
    if (props.errors) {
      console.log('Hello')
    }
  }, [props])

  if (props.authenticated) {
    return <Redirect to="/dashboard" />
  }
  return (
    <Container fluid className="welcome">
      <Row style={{ height: '100px' }}></Row>
      <Row>
        <Col></Col>
        <Col>
          <Card>
            <Card.Body className="text-center">
              <Image src={Logo} style={{ width: '100px' }} rounded />
              <Card.Title className="text-center tracker-logo-heading">
                Namaz Tracker
              </Card.Title>
            </Card.Body>
            <Form onSubmit={onSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="pass"
                />
              </Form.Group>

              <Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  style={{ width: '100%' }}
                >
                  <div className="d-flex justify-content-center align-items-center">
                    {props.loading && (
                      <Spinner animation="grow" size="sm" role="status" />
                    )}
                    <span style={{ paddingLeft: 5 }}>Login</span>
                  </div>
                </Button>
              </Form.Group>
            </Form>
            <Card.Body></Card.Body>
          </Card>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  )
}

Login.propTypes = {
  authenticated: PropTypes.bool,
  loading: PropTypes.bool,
  errors: PropTypes.string,
  loginUser: PropTypes.func,
}

/**
 *
 * @param {Global State} state
 * bind state to the component props
 */
const mapStateToProps = (state) => {
  const { user, UI } = state
  return {
    authenticated: user.authenticated,
    errors: UI.errors,
    loading: user.loading,
  }
}
/**
 *
 * Param {Redux Actions} dispatch
 * bind actions to the component props
 */
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      loginUser,
    },
    dispatch,
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
