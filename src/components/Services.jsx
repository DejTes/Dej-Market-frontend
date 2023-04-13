
import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { services } from '../utils/constants';

const Services = () => {
  return (
    <div className="py-5 bg-light">
      <Container>
        <Row className="mb-4">
          <Col>
            <h3 className="text-primary text-center">
              Laptops <br /> Based on your choice
            </h3>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              dolorum debitis consectetur reprehenderit non aliquam voluptates
              dolore aut vero consequuntur.
            </p>
          </Col>
        </Row>
        <Row>
          {services.map((service) => {
            const { id, icon, title, text } = service;
            return (
              <Col md={4} key={id}>
                <div className="service bg-primary p-4 rounded mb-4">
                  <span className="icon">{icon}</span>
                  <h4 className="text-white">{title}</h4>
                  <p className="text-white">{text}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Services;
