
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav-bar container-fluid my-2">
      <Navbar class="pt-2 pb-2" bg="light" variant="light">
        <Container>  
          <Link to="/">
            <Navbar.Brand href="#home">Dulce Pasteleria</Navbar.Brand>
          </Link>
          <Nav className=" d-flex align-items-end">
            <Link className="me-3"  to="/">Home</Link>
            <Link className="me-3"  to= "/category/1" >Con Chocolate</Link>
            <Link className="me-3"  to= "/category/2" >Sin Chocolate</Link>
          </Nav>
          <div>
            <CartWidget/>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;

