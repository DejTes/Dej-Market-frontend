
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../index.css';

const Footer = () => {
  return (
    <Container fluid className="footer-container">
      <Row className="justify-content-md-center">
        <Col md="auto">
          <h5 className="footer-h5">
            &copy; {new Date().getFullYear()}
            <span className="footer-span"> Dej-Market </span>
          </h5>
          <h5 className="footer-h5">All rights reserved</h5>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;

