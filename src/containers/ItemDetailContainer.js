
import { useState, useEffect } from "react";
import CardDetail from "../componentes/ItemDetail";
import { dataFromBD } from "../utilidades/data";
import customFetch from "../utilidades/customFetch";


function ItemDetailContainer() {
    const [dato, setData] = useState({});

    useEffect(() => {
      customFetch(2000, dataFromBD[1])
        .then((result) => setData(result))
        .catch((err) => console.log(err));
    }, []);
    return (
        <CardDetail item={dato}/>
    );
  }
  export default ItemDetailContainer;