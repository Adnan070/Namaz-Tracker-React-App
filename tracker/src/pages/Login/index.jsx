import React, { useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Image,
  Form,
  Button,
  Spinner,
} from "react-bootstrap";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Logo from "../../assets/img/logo-with-out-bg.png";
import { loginUser } from "../../redux/actions/userAction";
import PropTypes from "prop-types";
// import * as Yup from "yup";
import "../../App.css";

// const validationSchema = Yup.object({
//   email: Yup.string().email("Invalid Email Format").required("Required"),
//   pass: Yup.string().length(6, "Invalid Password").required("Required!"),
// });

function Login(props) {
  const onSubmit = (e) => {
    e.preventDefault();
    let { target } = e;
    let credential = {
      email: target[0].value,
      pass: target[1].value,
    };
    console.log(credential);
    props.loginUser(credential);
  };

  useEffect(() => {
    if (props.errors) {
      console.trace(props.errors);
    }
  }, [props]);

  if (props.authenticated) {
    console.log("Success");
    return <Redirect to="/dashboard" />;
  } else {
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
                <Form onSubmit={(e) => onSubmit(e)}>
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
                      style={{ width: "100%" }}
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
              </Card.Body>
            </Card>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    );
  }
}

Login.prototype = {
  error: PropTypes.string,
  authenticated: PropTypes.bool,
};

/**
 *
 * @param {Global State} state
 * bind state to the component props
 */
function mapStateToProps(state) {
  const { user, UI } = state;
  return {
    authenticated: user.authenticated,
    loading: user.loading,
    errors: UI.errors,
  };
}

/**
 *
 * @param {Redux Actions} dispatch
 * bind actions to the component props
 */
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      loginUser,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
