import React from "react";
import logo from ".././logo.svg";
import { Navbar,Nav,Container,NavbarCollapse } from "react-bootstrap";
import { FaShoppingCart,FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Header(){
    return(
        <header>
        <Navbar bg="light" expand="lg" collapseOnSelect>
            <Container>
                <Navbar.Brand href="/"><img src={logo}
                        width="50" height="50" alt="logo" />MyCreation</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <NavbarCollapse id="basic-navbar-nav">
                    <Nav className="ms-auto"  as="ul">
                        {/* <Nav.Link href="/">
                            <FaHome></FaHome> Home 
                        </Nav.Link>
                        <Nav.Link href="/cart">
                            <FaShoppingCart></FaShoppingCart> Cart
                        </Nav.Link>
                        <Nav.Link href="/login">
                            <FaUser></FaUser> Login
                        </Nav.Link> */}
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
                            <FaShoppingCart></FaShoppingCart> Cart
                        </NavLink>
                        </Nav.Item >
                        <Nav.Item as="li">
                        <NavLink className="nav-link" to="/login">
                            <FaUser></FaUser> Login
                        </NavLink>
                        </Nav.Item >
                    </Nav>
                </NavbarCollapse>
            </Container>
        </Navbar>
        </header>
    )
}

export default Header;