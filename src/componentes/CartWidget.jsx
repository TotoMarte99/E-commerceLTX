import imagenCarrito from "../imagenes/carrito-de-compras.png";
import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { DataContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import Card from "./ItemsInCart";

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { items } = useContext(DataContext);
  const { Clear } = useContext(DataContext);

  return (
    <>
      <Button className="btn-carrito btn btn-warning">
        <img
          src={imagenCarrito}
          className="ImgCarrito-NavBar"
          alt="carrito"
          onClick={handleShow}
        />
      </Button>
      <div className="Conteo-Carrito">
        <small id="counterCart">0</small>
      </div>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Your Shopping Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <div id="Cart-empty"></div>
        <Offcanvas.Body>
          <div>
            {items.map((item) => (
              <Card
                key={item.id}
                id={item.id}
                Amount={item.Amount}
                src={item.src}
                Title={item.Title}
                Price={item.Price}
              />
            ))}
          </div>
        </Offcanvas.Body>
        <div className="container-btns">
          <Link to="/category/cartCheckOut" className="navigation">
            <Button variant="outline-warning" className="m-2">
              Go to CheckOut
            </Button>
          </Link>
          <Button className="btn btn-warning m-2" onClick={Clear}>
            Remove All Items
          </Button>
        </div>
      </Offcanvas>
    </>
  );
}

export default Example;
