import { useState } from "react";
import ItemCount from "./ItemCount";
import Spinner from "../utilidades/Spinner";
import CheckOut from "../utilidades/BtnCheckOut";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";

function ItemDetail({ item }) {
  const [itemCount, setItemCount] = useState(false);

  const onAdd = (cantidad) => {
    toast.success(`You have added ${cantidad} products`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
    setItemCount(true);
  };

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
            {itemCount === false ? (
              <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
            ) : (
              <Link to="/cart">
                <CheckOut />
              </Link>
            )}
          </div>
        </div>
      ) : (
        <Spinner />
      )}
      <ToastContainer />
    </>
  );
}

export default ItemDetail;
