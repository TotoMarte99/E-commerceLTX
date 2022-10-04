import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardDetail from "../componentes/ItemDetail";
import { getFirestore, doc, getDoc } from "firebase/firestore";

function ItemDetailContainer() {
  const [data, setData] = useState({});
  const { idItem } = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb, "products", idItem);
    getDoc(queryDoc).then((res) => setData({ id: res.id, ...res.data() }));
  }, [idItem]);

  return (
    <>
      <CardDetail item={data} />
    </>
  );
}
export default ItemDetailContainer;
