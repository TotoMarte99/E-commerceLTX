import React, { useContext } from "react";
import { DataContext } from "../context/CartContext";
import "../estilos/ItemCheckOut.css";

const ItemsInCheckOut = (props) => {
  const { ClearProduct } = useContext(DataContext);

  return (
    <div className="all-container">
      <div className="foto-carrito">
        <img className="img-detail2" src={props.src} alt="foto" />
        <div className="detalles_carrito">
          <p>{props.Title}</p>
          <p>$ {props.Price} / each</p>
          <p>Items: {props.Amount} </p>
          <button
            className="btn btn-danger"
            onClick={() => ClearProduct(props.id)}
          >
            Remove
          </button>
        </div>
      </div>
      <hr className="separacion" />
    </div>
  );
};

export default ItemsInCheckOut;
