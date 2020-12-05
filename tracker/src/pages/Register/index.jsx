import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Image,
  Form,
  Button,
} from "react-bootstrap";
import Logo from "../../assets/img/logo-with-out-bg.png";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// import "../App.css";

function Register(props) {
  const handleSubmition = (data) => {
    console.log(data);
  };

  console.log(props.credentials);

  return (
    <Container fluid className="welcome">
      <Row style={{ height: "100px" }}></Row>
      <Row>
        <Col></Col>
        <Col>
          <Card>
            <Card.Body className="text-center">
              <Image src={Logo} style={{ width: "100px" }} rounded />
              <Card.Title className="text-center tracker-logo-heading">
                Namaz Tracker
              </Card.Title>
            </Card.Body>

            <Card.Body>
              <Form onSubmit={handleSubmition}>
                <Form.Group controlId="formBasicName">
                  {/* <Form.Label>Name</Form.Label> */}
                  <Form.Control type="text" placeholder="Enter your Name" />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  {/* <Form.Label>Email address</Form.Label> */}
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  {/* <Form.Label>Password</Form.Label> */}
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group controlId="formBasicCPassword">
                  {/* <Form.Label>Conform Password</Form.Label>  */}
                  <Form.Control
                    type="password"
                    placeholder="Conform Password"
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  style={{ width: "100%" }}
                >
                  Login
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

/**
 *
 * @param {Global State} state
 * bind state to the component props
 */
function mapStateToProps(state) {
  const { credentials } = state;
  return {
    credentials,
  };
}

/**
 *
 * @param {Redux Actions} dispatch
 * bind actions to the component props
 */
function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
