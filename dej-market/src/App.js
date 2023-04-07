import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import Services from "./components/Services";
import './index.css'

const App = () => {
  return (
    <Router>
      <Navbar />
      <main className="py-4">
        <Container>
      <Routes>
      
          <Route path='/' element={<HomeScreen/>} exact />
          <Route path='/product/:id' element={<ProductScreen/>} />
          
      </Routes>
     
        </Container>
      </main>
      <Services />
      <Footer />
    </Router>
  );
};

export default App;
