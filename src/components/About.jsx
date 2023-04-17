
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import '../index.css';

import about from '../assets/about.jpeg';

const AboutPage = () => {
  return (
    <main>
      <Container className="about-page-container">
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <Image src={about} alt="nice desk" className="about-image" fluid />
          </Col>
          <Col xs={12} md={6}>
            <article>
              <div className="title">
                <h2>our story</h2>
                <div className="underline"></div>
              </div>
              <p>
              Dej-Market was founded in 2010 by a team of passionate tech enthusiasts with a vision to create a comprehensive online marketplace for computing products. Over the years, we have built a strong reputation for excellence in product quality, affordability, and customer service. Today, we are proud to be a leading online destination for computers, with a vast selection of products and an ever-growing customer base.
              </p>
            </article>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default AboutPage;
