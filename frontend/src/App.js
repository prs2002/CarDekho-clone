import React from 'react'
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <>
    <Navbar/>
    <main className='py-3'>
    <Container>
      <Outlet/>
    </Container>
    </main>
    <Footer/>
    <ToastContainer/>
    </>
  );
};

export default App