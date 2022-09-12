import React from "react";
import ItemCount from "./ItemCount";
import Spinner from "../utilidades/Spinner";

function ItemDetail({ item }) {
  return (
    <>
      {item && item.src ? (
        <div className="item-detail">
          <div className="img-item">
            <img className="img-styles" src={item.src} alt="FotoProducto" />
          </div>
          <div className="details-product">
            <h4>{item.Title}</h4>
            <p className="text-p">{item.Text}</p>
            <h5>Special Offer:</h5>
            <h4>${item.Price}</h4>
            <p>{item.Warranty}</p>
            <p>Stock: {item.stock}</p>
            <ItemCount stock={item.stock} />
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
}

export default ItemDetail;
