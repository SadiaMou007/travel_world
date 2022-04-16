import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <Navbar sticky="top" className="my-nav" expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="text-light">
          Travel World
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">
              <Link to={"/home"} className="item">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link href="#about">
              <Link to={"/about"} className="item">
                About
              </Link>
            </Nav.Link>
            <Nav.Link href="#services">
              <Link to={"/services"} className="item">
                Services
              </Link>
            </Nav.Link>
            <Nav.Link href="#blogs">
              <Link to={"/blogs"} className="item">
                Blogs
              </Link>
            </Nav.Link>
            <Nav.Link href="#login">
              <Link to={"/login"} className="item">
                Login
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
