import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavLink from 'react-bootstrap/NavLink';

function NavbarOne() {
  return (
    <>
    <div className="container-fluid nav_bg">
    <div className="row">
      <Navbar expand="lg" className="bg-body-tertiary position: fixed">
        <Container>
          <Navbar.Brand href="home">
            <NavLink className="navbar-brand" to="/">
              CacheStack Inc.
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="home">Home</Nav.Link>
              <Nav.Link href="service">Services</Nav.Link>
              <Nav.Link href="partners">Partners</Nav.Link>
              <Nav.Link href="contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>
      </div>
    </>
  );
}

export default NavbarOne;