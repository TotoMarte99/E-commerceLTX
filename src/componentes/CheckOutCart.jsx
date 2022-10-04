import React, { useContext } from "react";
import ItemsCart from "./ItemForCheckOut";
import { DataContext } from "../context/CartContext";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { serverTimestamp, doc, setDoc, collection, updateDoc, increment } from "firebase/firestore";
import "../estilos/ItemForCheckOut.css";
import db from "../utilidades/FireBaseConfig";
import toast, { Toaster } from "react-hot-toast";

function CartCheckOut() {
  const { items } = useContext(DataContext);
  const { Clear2 } = useContext(DataContext);
  const { totalPrice } = useContext(DataContext);
  const { totalTaxes } = useContext(DataContext);
  const { discount } = useContext(DataContext);
  const { TotalCount } = useContext(DataContext);

  const createOrder = async () => {
    let itemsForDb = items.map((item) => ({
      id: item.id,
      title: item.Title,
      quantity: item.Amount,
    }));
    let order = {
      buyer: {
        name: "Tomas Martelon",
        email: "tomM@gmail.com",
        phone: "123-456-1234",
      },
      date: serverTimestamp(),
      products: itemsForDb,
      total: TotalCount(),
    };
    // console.log(order)
    const newOrderReference = doc(collection(db, "orders"));
    await setDoc(newOrderReference, order);
    toast.success('Your Order has been created, please take note of your order ID' + newOrderReference.id, {
      style: {
        backgroundColor: "#000",
        color: "white",
      }
    })
    Clear2()
    itemsForDb.map(async (item) => {
      const itemRef = doc(db, "products", item.id)
      await updateDoc(itemRef, {
        stock: increment(-item.quantity) 
      })
    })
  };
  return (
    <>
      <div>
        <div className="botones">
          <Link to="/category/all">
            <Button className="btn btn-warning">VIEW MORE PRODUCTS</Button>
          </Link>
          <Button className="btn btn-warning" onClick={Clear2}>
            CLEAR ALL THE CART
          </Button>
        </div>
        <h1 className="Texto-TopProducts">LIST OF ITEMS</h1>
        <div id="Cart-empty2"></div>
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
          <Button onClick={createOrder} variant="success">
            FINISH THE ORDER
          </Button>
        </div>
        <Toaster 
          position= "top-center"
          reverseOrder= {false}
          gutter= {8}
          toastOptions= {{
            duration: 5000,

          }}
        />
      </div>
    </>
  );
}
export default CartCheckOut;
