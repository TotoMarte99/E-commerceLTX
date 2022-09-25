import React from "react";
import ItemList from "../componentes/ItemList";
import { useState, useEffect } from "react";
import dataFromBD from "../utilidades/data";
import customFetch from "../utilidades/customFetch";
import Spinner from "../utilidades/Spinner";

function ItemsListContainer(item) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    customFetch(2000, dataFromBD)
      .then(datos => { setData(dataFromBD)
      setLoading(false); })
      .catch((err) => console.log(err));
  }, []);


  return (
    <>
      { loading ? <Spinner/> : <ItemList items={data} /> }
    </>
  );
}

export default ItemsListContainer;
