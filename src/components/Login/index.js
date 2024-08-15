import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginPage.css'; // Add custom CSS for additional styling

export default function LoginPage() {
  return (
    <Container className="login-container">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <div className="form-header text-center mb-4">
            <h1 className="display-4 mb-3">Login</h1>
            <p className="lead mb-4">Access your account using your credentials.</p>
          </div>
          <Form className="login-form" noValidate>
            <Form.Group as={Row} className="mb-3" controlId="formEmail">
              <Form.Label column sm={3}>Email</Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="form-control-custom"
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid email.
                </Form.Control.Feedback>
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
                  label="Remember me"
                />
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
