import { useState } from "react";
import Button from "react-bootstrap/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ItemCount(props) {
  //Creacion de la alerta para no poder agregar 0 productos al carrito//
  const alerta = () => {
    toast.error(`Please Add One Item`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  };

  const confirmacion = () => {
    toast.success(`You have added ${rate} products`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });

    let counter = document.querySelector("#counterCart");
    counter.innerHTML = JSON.stringify(rate);
  };

  const [rate, setRate] = useState(1);

  //Boton aumento de cantidad//
  const handleClickUp = () => {
    setRate(rate + 1);

    if (rate === props.stock) {
      setRate(props.stock);
    }
  };

  //Boton dismunicion de cantidad//
  const handleClickDown = () => {
    setRate(rate - 1);

    if (rate <= 0) {
      setRate(0);
    }
  };

  //Alerta de cantidad añadida al carrito//
  const AddToCarts = () => {
    confirmacion();
  };

  //LLamado a la alerta y aplicacion de condicional
  const AddToCart = () => {
    rate === 0 ? alerta() : AddToCarts();
  };

  return (
    <>
      <Button onClick={handleClickDown} variant="warning">
        -
      </Button>
      {rate}
      <Button onClick={handleClickUp} variant="warning">
        +
      </Button>
      <button onClick={AddToCart} className="btn btn-warning m-2">
        Add to Cart
      </button>
      <ToastContainer />
    </>
  );
}

export default ItemCount;
