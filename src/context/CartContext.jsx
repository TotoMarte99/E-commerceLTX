import React, { createContext, useState } from "react";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItems = (item, Amount) => {
    if (isInCart(item.id)) {
      setItems(
        items.map((product) => {
          return product.id === item.id
            ? { ...product, Amount: product.Amount + Amount }
            : product;
        })
      );
    } else {
      setItems([...items, { ...item, Amount }]);
    }
  };

  const isInCart = (id) =>
    items.find((product) => product.id === id) ? true : false;

  const Clear = () => {
    setItems([]);
    let div = document.getElementById("Cart-empty");
    if ([]) {
      div.innerHTML = "Your cart is empty";
      div.style.textAlign = "center";
      div.style.fontSize = "25px";
      div.style.fontWeight = "600";
      div.style.border = "1px solid red";
      div.style.margin = "15px 15px 10px 10px";
    }
  };

  const ClearProduct = (id) => {
    setItems(items.filter((product) => product.id !== id));
  };

  return (
    <DataContext.Provider
      value={{ items, addItems, Clear, ClearProduct, isInCart }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
