import React, { useContext } from "react";
import ItemsCart from "./ItemForCheckOut";
import { DataContext } from "../context/CartContext";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "../estilos/ItemForCheckOut.css";

function CartCheckOut() {
  const { items } = useContext(DataContext);
  const { Clear } = useContext(DataContext);
  const { totalPrice } = useContext(DataContext);
  const { totalTaxes } = useContext(DataContext);
  const { discount } = useContext(DataContext);
  const { TotalCount } = useContext(DataContext);
  return (
    <>
      <div>
        <div className="botones">
          <Link to="/category/all">
            <Button className="btn btn-warning">VIEW MORE PRODUCTS</Button>
          </Link>
          <Button className="btn btn-warning" onClick={Clear}>
            CLEAR ALL THE CART
          </Button>
        </div>
        <h1 className="Texto-TopProducts">LIST OF ITEMS</h1>
        {items.map((item) => (
          <ItemsCart
            key={item.id}
            id={item.id}
            Amount={item.Amount}
            src={item.src}
            Title={item.Title}
            Price={item.Price}
          />
        ))}
      </div>
      <div className="titulos_order">
        <div className="titulos_summary">
          <h3>Subtotal</h3>
          <h3>${totalPrice()}</h3>
        </div>
        <br />
        <div className="titulos_summary">
          <h3>Taxes</h3>
          <h3>${totalTaxes()}</h3>
        </div>
        <hr />
        <div className="titulos_summary">
          <h3>15% Off</h3>
          <h3>${discount()}</h3>
        </div>
        <div className="titulos_summary">
          <h2>Total</h2>
          <h3>${TotalCount()}</h3>
        </div>
        <div className="endOrder">
          <Button variant="success">FINISH THE ORDER</Button>
        </div>
      </div>
    </>
  );
}
export default CartCheckOut;
