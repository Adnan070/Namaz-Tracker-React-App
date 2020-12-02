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
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Logo from "../../assets/img/logo-with-out-bg.png";
import { loginUser } from "../../redux/actions/userAction";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
// import "../App.css";

const initialValues = {
  email: "",
  pass: "",
};

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid Email Format").required("Required"),
  pass: Yup.string().length(6, "Invalid Password").required("Required!"),
});

function Login(props) {
  const onSubmit = (e) => {
    e.preventDefault();
    let credential = {
      email: e.target[0].value,
      pass: e.target[1].value,
    };
    console.log(credential);
    props.loginUser(credential);
  };

  if (props.authenticated) {
    return <Redirect to="/register" />;
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
                {/* <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  // onSubmit={onSubmit}
                > */}
                {/* {(formik) => ( */}
                <Form onSubmit={(e) => onSubmit(e)}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      name="email"
                      // {...formik.getFieldProps('pass')}
                    />
                    {/* <ErrorMessage name="email">
                          {(error) => (
                            <div style={{ color: "red" }}>{error}</div>
                          )}
                        </ErrorMessage> */}
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      name="pass"
                      // {...formik.getFieldProps('pass')}
                    />
                    {/* <ErrorMessage name="pass">
                          {(error) => (
                            <div style={{ color: "red" }}>{error}</div>
                          )}
                        </ErrorMessage> */}
                  </Form.Group>
                  {/* <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                      </Form.Group> */}

                  <Button
                    variant="primary"
                    type="submit"
                    style={{ width: "100%" }}
                    // disabled={!formik.isValid}
                  >
                    Login
                  </Button>
                </Form>
                {/* )}
                </Formik> */}
              </Card.Body>
            </Card>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    );
  }
}

/**
 *
 * @param {Global State} state
 * bind state to the component props
 */
function mapStateToProps(state) {
  const { authenticated } = state;
  return {
    authenticated,
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
