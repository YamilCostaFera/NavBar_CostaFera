import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';

function ColorSchemesExample() {
  return (
    <>
      <Navbar class="pt-2 pb-2" bg="light" variant="light">
        <Container>  
          <Navbar.Brand href="#home">Dulce Pasteleria</Navbar.Brand>
          <Nav className=" d-flex align-items-end">
            <Nav.Link href="#quiensoy">Quien soy</Nav.Link>
            <Nav.Link href="#productos">Productos</Nav.Link>
            <Nav.Link href="#carrito">Carrito</Nav.Link>
          </Nav>
          <div>
           <CartWidget/>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;