import React from "react";
import imagenCarrito from "../imagenes/carrito-de-compras.png";

function CardWidget() {
  return (
    <>
      <img
        src={imagenCarrito}
        className="ImgCarrito-NavBar"
        alt="carrito"
      ></img>
      <div className="Conteo-Carrito">
        <small id="counterCart">0</small>
      </div>
    </>
  );
}

export default CardWidget;
