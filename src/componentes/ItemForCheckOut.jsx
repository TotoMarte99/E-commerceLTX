import React, { useContext } from "react";
import { DataContext } from "../context/CartContext";
import "../estilos/ItemForCheckOut.css";

const ItemsInCheckOut = (props) => {
  const { ClearProduct } = useContext(DataContext);

  return (
    <div className="all-container">
      <div className="foto-carrito">
        <img className="img-detail2" src={props.src} alt="foto" />
        <div className="contenedor-boton">
          <h3 className="text-white">{props.Title}</h3>
          <div className="detalles-carrito">
            <h5 className="text-white text-center">$ {props.Price} / Each</h5>
            <h6 className="text-white text-center">Quantity:{props.Amount}</h6>
          </div>
          <button
            className="btn btn-warning"
            onClick={() => ClearProduct(props.id)}
          >
            Remove
          </button>
          <button className="btn btn-warning m-3" onClick={alert}>
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemsInCheckOut;
