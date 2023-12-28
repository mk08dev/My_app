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
                    <Navbar className="justify-content-center">
                    <Navbar.Brand  to="/">
                        <img src={logo}
                        width="40" height="40" alt="logo" />
                    </Navbar.Brand>
                    </Navbar>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Navbar className="justify-content-center">
                    <Nav as="ul">
                        <Nav.Item as="li">
                        <NavLink className="nav-link" to="/">
                            Home 
                        </NavLink>
                        </Nav.Item >
                        <Nav.Item as="li">
                        <NavLink className="nav-link" to="/about">
                            About Us
                        </NavLink>
                        </Nav.Item >
                        <Nav.Item as="li">
                        <NavLink className="nav-link" to="/contact">
                            Contact Us
                        </NavLink>
                        </Nav.Item >
                        <Nav.Item as="li">
                        <NavLink className="nav-link" to="/cart">
                            Cart
                        </NavLink>
                        </Nav.Item >
                        <Nav.Item as="li">
                        <NavLink className="nav-link" to="/login">
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