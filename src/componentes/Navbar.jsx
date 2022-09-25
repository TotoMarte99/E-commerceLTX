import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../imagenes/Ltxwatches-logo.png";
import Button from "react-bootstrap/Button";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

function Navegacion() {
  return (
    <>
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>
              <Link to="/E-commerceLTX">
                <img  src={Logo} alt="Logo1" />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link>
                  <Link to="/contact" className="navigation">
                    Contact
                  </Link>
                </Nav.Link>
                <NavDropdown title="Watches" id="collasible-nav-dropdown">
                  <NavDropdown.Item>
                    <Link to="/category/8" className="navigation">
                      Casual
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/category/7" className="navigation">
                      Luxury
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/category/9" className="navigation">
                      Digital
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/category/all" className="navigation2">
                      View All
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav>
                  <Button className="btn-Login" variant="outline-secondary">
                    Login
                  </Button>
                </Nav>
                <Nav>
                  <Button className="btn-Login" variant="outline-secondary">
                    Sing Up
                  </Button>
                </Nav>
              </Nav>
              <Nav.Link id="carrito-section">
                <CartWidget />
              </Nav.Link>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default Navegacion;
