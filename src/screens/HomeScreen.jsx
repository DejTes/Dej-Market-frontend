import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import Loader from "../components/Loader";
import NewProductCarousel from "../components/NewProductCarousel";
import Message from "../components/Message";
import { listProducts } from "../actions/productActions";
import Hero from "../components/Hero";
import Services from "../components/Services";

const HomeScreen = ({ match }) => {
  const dispatch = useDispatch();

  const keyword = match ? match.params.keyword : "";

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword));
  }, [dispatch, keyword]);

  return (
    <>
      <Hero />
      {!keyword && <NewProductCarousel />}
      <h1 style={{textAlign: 'center', marginTop: '30px'}}>All Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col sm={10} md={6} lg={4} xl={3} key={product._id}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
      <Services />
    </>
  );
};

export default HomeScreen;
