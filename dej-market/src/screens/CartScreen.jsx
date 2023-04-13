import React, { useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  Form,
  ListGroup,
  Image,
  Button,
  Card,
  ListGroupItem,
} from "react-bootstrap";
import Message from "../components/Message";
import { addToCart, removeFromCart } from "../actions/cartActions";

const CartScreen = () => {
  const { id: productId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const count = location.search ? Number(location.search.split("=")[1]) : 1;
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, count));
    }
  }, [dispatch, productId, count]);



  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  };



  const checkoutHandler = () => {
    // console.log("checkout")
    navigate('/login?redirect=shipping')
  }


  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <Message>
            Your cart is Empty <br /> <br /><Link to="/">FILL IT UP</Link>
          </Message>
        ) : (
          <ListGroup variant="flush">
            {cartItems.map((item) => (
              <ListGroup.Item key={item.product}>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={3}>
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </Col>
                  <Col md={2}> ${item.price} </Col>
                  <Col md={2}>
                    <Form.Control
                      as="select"
                      value={item.count}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={2}>
                    <Button
                      type="button"
                      variant="light"
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      <i className="fas fa-trash"></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
            <Card>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        {/* <h2>Subtotal ({cartItems.reduce((acc, item) => acc + item.count, 0)}) items</h2>
                        ${cartItems.reduce((acc, item) => acc + item.count * item.price,0).toFixed(2)} */}
                        <h2>Subtotal ({cartItems.reduce((acc, { count }) => acc + count, 0)}) items</h2>
                        ${cartItems.reduce((acc, { count, price }) => acc + count * price, 0).toFixed(2)}

                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Button type="button" className='btn-block' disabled={cartItems.length === 0} onClick={checkoutHandler}>
                            Proceed To Checkout
                        </Button>
                    </ListGroup.Item>
                    
                    <ListGroup.Item>

                    <Link className='btn' to='/'>KEEP SHOPPING</Link>
                    </ListGroup.Item>
                    {/* <Link className='btn' to='/order'>my orders</Link> */}
                   
                </ListGroup>
            </Card>
      </Col>
    </Row>
  );
};
export default CartScreen;
