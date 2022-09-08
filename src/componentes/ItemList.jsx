import { useState, useEffect } from "react";
import Card from "./Item";
import dataFromBD from "../utilidades/data";
import customFetch from "../utilidades/customFetch";


function ItemListContainer() {
  const [data, setData] = useState([]);
  useEffect(() => {
    customFetch(2000, dataFromBD)
      .then((datos) => setData(dataFromBD))
      .catch((err) => console.log(err));
  }, []);
  return data.map((item) => (
      <Card
        stock={item.stock}
        src={item.src}
        Title={item.Title}
        Text={item.Text}
      />
  ));
}
export default ItemListContainer;