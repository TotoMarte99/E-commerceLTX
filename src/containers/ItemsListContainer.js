import { useState, useEffect } from "react";
import Card from "../componentes/Item";
import { useParams } from "react-router-dom";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

function AllItemListContainer() {
  const [data, setData] = useState([]);
  const { idCategory } = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, "products");
    if (idCategory) {
      const queryFilter = query(
        queryCollection,
        where("categoryID", "==", parseInt(idCategory))
      );
      getDocs(queryFilter).then((res) =>
        setData(
          res.docs.map((product) => ({ id: product.id, ...product.data() }))
        )
      );
    } else {
      getDocs(queryCollection).then((res) =>
        setData(
          res.docs.map((product) => ({ id: product.id, ...product.data() }))
        )
      );
    }
  }, [idCategory]);

  return data.map((item) => (
    <>
      <Card
        key={item.id}
        id={item.id}
        stock={item.stock}
        src={item.src}
        Title={item.Title}
        Text={item.Text}
      />
    </>
  ));
}
export default AllItemListContainer;
