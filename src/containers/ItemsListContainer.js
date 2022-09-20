import React from "react";
import ItemList from "../componentes/ItemList";
import { useState, useEffect } from "react";
import dataFromBD from "../utilidades/data";
import customFetch from "../utilidades/customFetch";

function ItemsListContainer(item) {
  const [data, setData] = useState([]);


  useEffect(() => {
    customFetch(2000, dataFromBD)
      .then((datos) => setData(dataFromBD))
      .catch((err) => console.log(err));
  }, []);


  return (
    <>
      <ItemList items={data} /> 
    </>
  );
}

export default ItemsListContainer;
