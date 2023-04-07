import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Row, Col} from 'react-bootstrap'
import Product from '../components/Product'

// import products from '../products'

const HomeScreen = () => {
  const [products, setProducts] = useState([])


  useEffect(() =>{
   const getProducts = async () => {
    const{data} = await axios.get('http://localhost:8000/api/products')
    setProducts(data)
   }
   getProducts()
  }, [])

  return (
    <>
    <h1>New Products</h1>
    <Row>
        {products.map((product)=> (
            <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
                {/* <h3>{product.name}</h3> */}
                <Product product={product} />
            </Col>
        ))}
    </Row>
    </>
  )
}

export default HomeScreen
