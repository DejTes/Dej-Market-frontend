import React from 'react'
import {Container} from 'react-bootstrap'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App =  () => {
  return (
  <>
  < Navbar />
 <main className='py-4'>
  <Container>
  <h1>Dej-Market</h1>
  </Container>
  </main>
  <Footer />
  </>
  );
}

export default App;
