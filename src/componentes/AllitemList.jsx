import { useState, useEffect } from "react";
import Card from "./Item";
import customFetch from "../utilidades/customFetch";
import { useParams } from "react-router-dom";
import AllDataProducts from "../utilidades/AllData";
import Spinner from "../utilidades/Spinner";


function AllItemListContainer() {
  const [data, setData] = useState([]);
  const { idCategory } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    customFetch(
      2000,
      AllDataProducts.filter((item) => {
        if (idCategory === undefined) {
          return item;
        } else {
          return item.categoryID === parseInt(idCategory);
        }
      })
    )
      .then(result => {setData(result)
      setLoading(false);})
      .catch((err) => console.log(err));
  }, [idCategory]);

  return data.map((item) => (
    <>
    { loading ? <Spinner/> :
      <Card
        key={item.id}
        id={item.id}
        stock={item.stock}
        src={item.src}
        Title={item.Title}
        Text={item.Text}
      />
    }
    </>
  ));
}
export default AllItemListContainer;
