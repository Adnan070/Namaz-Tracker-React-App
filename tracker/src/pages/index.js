import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class index extends Component {
  render() {
    return (
      <Form>
        <Form.Group>
          <Link to="/register">
            <Button variant="primary" style={{ width: '100%' }}>
              Register
            </Button>
          </Link>
        </Form.Group>
        <Link to="/login">
          <Button variant="secondary" style={{ width: '100%' }}>
            Login
          </Button>
        </Link>
      </Form>
    )
  }
}
