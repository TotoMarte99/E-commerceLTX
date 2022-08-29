import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import imagenCarrito from '../imagenes/carrito-de-compras.png'
import Logo from '../imagenes/Ltxwatches-logo.png'
import Button from 'react-bootstrap/Button';


function Navegacion(){
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home"> <img src={Logo} alt="Logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#pricing">About Us</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <NavDropdown title="Watches" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Casual</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Luxury</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Digital</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav>
              <Button className='btn-Login rounded-0'  variant="outline-secondary">Login</Button>{' '}
            </Nav>
            <Nav>
              <Button className='btn-Login rounded-0'  variant="outline-secondary">Sing Up</Button>{' '}
            </Nav>
          </Nav>
          <Nav.Link id="carrito-section" href="#carito">
              <img src={imagenCarrito} className="ImgCarrito-NavBar" alt="carrito"></img>
              <div className='Conteo-Carrito'>
                <small>0</small>
              </div>
            </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navegacion;
