import React, { useContext } from "react";
import { DataContext } from "../context/CartContext";

const CardItemCart = (props) => {
  const { ClearProduct } = useContext(DataContext);

  return (
    <div className="all-container">
      <div className="foto-carrito">
        <img
          className="img-detail"
          src={props.src}
          alt="foto"
        />
        <div className="contenedor-boton">
          <h3 className="text-black">{props.Title}</h3>
          <div className="detalles-carrito">
            <h5 className="text-black text-center">$ {props.Price} / Each</h5>
            <h6 className="text-black text-center">Quantity:{props.Amount}</h6>
          </div>
          <button className="btn btn-warning" onClick={() => ClearProduct(props.id)}>Remove</button>
        </div>
      </div>
    </div>
  );
};

export default CardItemCart;
