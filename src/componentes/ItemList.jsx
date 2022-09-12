import React from "react";
import Card from "./Item";

function ItemList({ items }) {
  return items.map((item) => (
    <Card
      key={item.id}
      id={item.id}
      stock={item.stock}
      src={item.src}
      Title={item.Title}
      Text={item.Text}
    />
  ));
}
export default ItemList;
