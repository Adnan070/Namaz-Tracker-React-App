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
import { Link } from "react-router-dom";
import Logo from "../assets/img/logo-with-out-bg.png";
import "../App.css";

export default function Home() {
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
              <Form>
                <Form.Group>
                  <Link to="/register">
                    <Button variant="primary" style={{ width: "100%" }}>
                      Register
                    </Button>
                  </Link>
                </Form.Group>
                <Link to="/login">
                  <Button variant="secondary" style={{ width: "100%" }}>
                    Login
                  </Button>
                </Link>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}
