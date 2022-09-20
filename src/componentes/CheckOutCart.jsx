import React, { useContext } from "react";
import ItemsCart from "./ItemForCheckOut";
import { DataContext } from "../context/CartContext";

function CartCheckOut() {
  const { items } = useContext(DataContext);

  return (
    <>
    <h1 className="Texto-TopProducts">YOUR CHECKOUT CART</h1>
      {items.map((item) => (
        <div className="div-checkoutCart2">
        <ItemsCart
          key={item.id}
          id={item.id}
          Amount={item.Amount}
          src={item.src}
          Title={item.Title}
          Price={item.Price}
        />
        </div>
      ))}
    </>
  );
}
export default CartCheckOut;
