// import React from 'react'
// import styled from 'styled-components'

// import about from '../assets/about.jpeg'
// const AboutPage = () => {
//   return (
//     <main>
//       <Wrapper className='page section section-center'>
//         <img src={about} alt='nice desk' />
//         <article>
//           <div className='title'>
//             <h2>our story</h2>
//             <div className='underline'></div>
//           </div>
//           <p>
//             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
//             accusantium sapiente tempora sed dolore esse deserunt eaque
//             excepturi, delectus error accusamus vel eligendi, omnis beatae.
//             Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque
//             dolore, obcaecati incidunt sequi blanditiis est exercitationem
//             molestiae delectus saepe odio eligendi modi porro eaque in libero
//             minus unde sapiente consectetur architecto. Ullam rerum, nemo iste
//             ex, eaque perspiciatis nisi, eum totam velit saepe sed quos
//             similique amet. Ex, voluptate accusamus nesciunt totam vitae esse
//             iste.
//           </p>
//         </article>
//       </Wrapper>
//     </main>
//   )
// }
// const Wrapper = styled.section`
//   display: grid;
//   gap: 4rem;
//   img {
//     width: 100%;
//     display: block;
//     border-radius: var(--radius);
//     height: 500px;
//     object-fit: cover;
//   }
//   p {
//     line-height: 2;
//     max-width: 45em;
//     margin: 0 auto;
//     margin-top: 2rem;
//     color: var(--clr-grey-5);
//   }
//   .title {
//     text-align: left;
//   }
//   .underline {
//     margin-left: 0;
//   }
//   @media (min-width: 992px) {
//     grid-template-columns: 1fr 1fr;
//   }
// `
// export default AboutPage


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
