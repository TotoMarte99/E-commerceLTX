import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardDetail from "../componentes/ItemDetail";
import dataFromBD from "../utilidades/AllData";
import customFetch from "../utilidades/customFetch";

function ItemDetailContainer() {
  const [dato, setData] = useState({});
  const { idItem } = useParams();

  useEffect(() => {
    customFetch(
      2000,
      dataFromBD.find((item) => item.id === parseInt(idItem))
    )
      .then((result) => setData(result))
      .catch((err) => console.log(err));
  }, [idItem]);
  return <CardDetail item={dato} />;
}
export default ItemDetailContainer;
