
// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Row, Col } from 'react-bootstrap';
// import Product from '../components/Product';
// import Loader from '../components/Loader';
// import Message from '../components/Message';
// import { listProducts } from '../actions/productActions';

// const HomeScreen = ({match}) => {
//   const dispatch = useDispatch();

//   const keyword = match.params.keyword


//   const productList = useSelector((state) => state.productList);
//   const { loading, error, products } = productList;

//   useEffect(() => {
//     dispatch(listProducts(keyword));
//   }, [dispatch]);

//   return (
//     <>
//       <h1>New Products</h1>
//       {loading ? (
//         <Loader/>
//       ) : error ? (
//         <Message variant='danger' >{error}</Message>
//       ) : (
//         <Row>
//           {products.map((product) => (
//             <Col sm={10} md={6} lg={4} xl={3} key={product._id}>
//               <Product product={product} />
//             </Col>
//           ))}
//         </Row>
//       )}
//     </>
//   );
// };

// export default HomeScreen;


import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { listProducts } from '../actions/productActions';

const HomeScreen = ({match}) => {
  const dispatch = useDispatch();

  const keyword = match ? match.params.keyword : '';

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword));
  }, [dispatch, keyword]);

  return (
    <>
      <h1>New Products</h1>
      {loading ? (
        <Loader/>
      ) : error ? (
        <Message variant='danger' >{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col sm={10} md={6} lg={4} xl={3} key={product._id}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
