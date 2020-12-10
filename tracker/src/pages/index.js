import React from 'react'
import { Container, Card, Image, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from '../assets/img/logo-with-out-bg.png'
import '../App.css'

export default class Home extends React.Component {
  componentDidMount() {
    const windowSize =
      window.innerWidth >= 1200
        ? 'xl'
        : window.innerWidth >= 992
        ? 'lg'
        : window.innerWidth >= 768
        ? 'md'
        : window.innerWidth >= 576
        ? 'sm'
        : window.innerWidth >= 350
        ? 'xs'
        : 'exs'
    console.log(windowSize)
    if (windowSize === 'exs') {
      document.getElementById('card').style.minWidth = '250px'
      document.getElementById('card').style.maxWidth = '300px'
    } else if (windowSize === 'xs') {
      document.getElementById('card').style.minWidth = '350px'
      document.getElementById('card').style.maxWidth = '500px'
    } else if (windowSize === 'sm') {
      document.getElementById('card').style.minWidth = '450px'
      document.getElementById('card').style.maxWidth = '500px'
    } else if (windowSize === 'md') {
      document.getElementById('card').style.minWidth = '550px'
    } else if (windowSize === 'lg') {
      console.log('LG')
    } else if (windowSize === 'xl') {
      console.log('XL')
    }
  }

  render() {
    window.addEventListener('resize', () => {
      let windowSize =
        window.innerWidth >= 1200
          ? 'xl'
          : window.innerWidth >= 992
          ? 'lg'
          : window.innerWidth >= 768
          ? 'md'
          : window.innerWidth >= 576
          ? 'sm'
          : window.innerWidth >= 350
          ? 'xs'
          : 'exs'
      if (windowSize === 'exs') {
        document.getElementById('card').style.minWidth = '250px'
        document.getElementById('card').style.maxWidth = '300px'
      } else if (windowSize === 'xs') {
        document.getElementById('card').style.minWidth = '350px'
        document.getElementById('card').style.maxWidth = '500px'
      } else if (windowSize === 'sm') {
        document.getElementById('card').style.minWidth = '450px'
        document.getElementById('card').style.maxWidth = '500px'
      } else if (windowSize === 'md') {
        document.getElementById('card').style.minWidth = '550px'
      } else if (windowSize === 'lg') {
        console.log('LG')
      } else if (windowSize === 'xl') {
        console.log('XL')
      }
    })
    return (
      <Container
        id="wrapper"
        className="d-flex justify-content-center align-items-center vh-100 "
      >
        <Card id="card">
          <Card.Body className="text-center">
            <Image src={Logo} style={{ width: '100px' }} rounded />
            <Card.Title className="text-center tracker-logo-heading">
              Namaz Tracker
            </Card.Title>
          </Card.Body>

          <Card.Body>
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
          </Card.Body>
        </Card>
      </Container>
    )
  }
}
