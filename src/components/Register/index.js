import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './SignupPage.css'; // Add custom CSS for additional styling

export default function SignupPage() {
  return (
    <Container className="signup-container">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <div className="form-header text-center mb-4">
            <h1 className="display-4 mb-3">Register</h1>
            <p className="lead mb-4">Create your account to get started.</p>
          </div>
          <Form className="signup-form" noValidate>
            <Form.Group as={Row} className="mb-3" controlId="formFirstName">
              <Form.Label column sm={3}>First Name</Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="text"
                  placeholder="John"
                  required
                  className="form-control-custom"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formLastName">
              <Form.Label column sm={3}>Last Name</Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="text"
                  placeholder="Doe"
                  required
                  className="form-control-custom"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formEmail">
              <Form.Label column sm={3}>Email</Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="email"
                  placeholder="johndoe@example.com"
                  required
                  className="form-control-custom"
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid email.
                </Form.Control.Feedback>
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formUsername">
              <Form.Label column sm={3}>Username</Form.Label>
              <Col sm={9}>
                <div className="input-group">
                  <span className="input-group-text">@</span>
                  <Form.Control
                    type="text"
                    placeholder="johndoe"
                    required
                    className="form-control-custom"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please choose a username.
                  </Form.Control.Feedback>
                </div>
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-4" controlId="formPassword">
              <Form.Label column sm={3}>Password</Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  required
                  className="form-control-custom"
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a password.
                </Form.Control.Feedback>
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-4">
              <Col sm={12}>
                <Form.Check
                  type="checkbox"
                  label="Agree to terms and conditions"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  You must agree before submitting.
                </Form.Control.Feedback>
              </Col>
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 btn-custom">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
