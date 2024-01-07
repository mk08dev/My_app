import React from "react";
import logo from ".././logo.svg";
import { Container,Navbar,Nav,Row,Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Footer(){
    const currentYear = new Date().getFullYear();
    return(
        <footer className="App bg-secondary text-white">
            <Container>
                <Row>
                    <Col>
                    <Navbar className="justify-content-center mt-2">
                        <img src={logo}
                        width="50" height="50" alt="logo" />
                    </Navbar>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Navbar className="justify-content-center p-0">
                    <Nav as="ul" className="footer-nav">
                        <Nav.Item as="li">
                        <NavLink className="nav-link text-white" to="/">
                            Home 
                        </NavLink>
                        </Nav.Item >
                        <Nav.Item as="li">
                        <NavLink className="nav-link text-white" to="/about">
                            About Us
                        </NavLink>
                        </Nav.Item >
                        <Nav.Item as="li">
                        <NavLink className="nav-link text-white" to="/contact">
                            Contact Us
                        </NavLink>
                        </Nav.Item >
                        <Nav.Item as="li">
                        <NavLink className="nav-link text-white" to="/cart">
                            Cart
                        </NavLink>
                        </Nav.Item >
                        <Nav.Item as="li">
                        <NavLink className="nav-link text-white" to="/login">
                            Login
                        </NavLink>
                        </Nav.Item >
                    </Nav>
                    </Navbar>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <p className="mt-3 mb-4">MyCreation &copy; {currentYear}</p> 
                    </Col>
                </Row>
            </Container> 
        </footer>
    )
}

export default Footer;