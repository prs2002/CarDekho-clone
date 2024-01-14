import React from 'react'
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Headerbar from "./components/header/Headerbar";
// import Header from "./components/header/Header";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import LoginScreen from './screens/LoginScreen';

const App = () => {
  return (
    <>
    {/* <Header/> */}
    <Headerbar/>
    <main className='py-3'>
    <LoginScreen/>
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