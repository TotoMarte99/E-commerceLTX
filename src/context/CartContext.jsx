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
  const Clear2 = () => {
    setItems([]);
    let div = document.getElementById("Cart-empty2");
    if ([]) {
      div.innerHTML = "Your cart is empty...";
      div.style.textAlign = "center";
      div.style.color = "white"
      div.style.fontSize = "25px";
      div.style.fontWeight = "600";
      
    }
  };

  const ClearProduct = (id) => {
    setItems(items.filter((product) => product.id !== id));
  };

  const totalOfProducts = () =>
    items.reduce(
      (acumulador, productoActual) => acumulador + productoActual.Amount,
      0
    );

  const totalPrice = () => {
    return items.reduce((prev, act) => prev + act.Amount * act.Price, 0);
  };

  const totalTaxes = () => {
    return Math.round(totalPrice() * 0.21);
  };

  const discount = () => {
    return Math.round (totalTaxes() * 15 / 100);
  };

  const TotalCount = () => {
    return Math.round( totalPrice() + totalTaxes() - discount() );
  }

  return (
    <DataContext.Provider
      value={{
        items,
        addItems,
        Clear,
        ClearProduct,
        isInCart,
        totalOfProducts,
        totalPrice,
        totalTaxes,
        discount,
        TotalCount,
        Clear2
        
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
