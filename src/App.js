import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import Footer from './component/Footer';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router,Routes,Route,BrowserRouter } from "react-router-dom";
import Home from './component/Home';
import Login from "./component/Login";
import About from "./component/About";
import Cart from "./component/Cart";
import SignIn from './component/SignIn';
import Contact from './component/Contact';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header /> 
      <Container>
      <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route exact path="/about" element={<About/>}></Route>
            <Route exact path="/contact" element={<Contact/>}></Route>
            <Route exact path="/cart" element={<Cart/>}></Route>
            <Route exact path="/login" element={<Login/>}></Route>
            <Route exact path="/signin" element={<SignIn/>}></Route>
      </Routes>
      </Container>
      <Footer />
      </BrowserRouter>
    </div>
  );
}  

export default App;   
