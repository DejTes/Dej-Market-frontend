
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import front from '../assets/front.jpg'
import '../index.css';

const Hero = () => {
  return (
    <Container fluid >
      <Row className="justify-content-center align-items-center">
        <Col xs={12} md={5} className="content text-center text-md-start">
          <h1>
            Dej-market <br />
            laptops market
          </h1>
          <p>
          Dej-Market is the ultimate online destination for all your computing needs. Our home screen showcases the latest and greatest deals on 2-in-1s, gaming laptops, and business laptops. Whether you're a student, professional, or gamer, we have a wide selection of high-quality computers to suit your needs. Shop with confidence and get the best deals on Dej-Market today!
          </p>
          <Link to="/">
            <Button >shop now</Button>
          </Link>
        </Col>
        <Col xs={12} md={5} >
          <img src={front} className="main-img" />
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
