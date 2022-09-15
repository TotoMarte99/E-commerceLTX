import { useState } from "react";
import Button from "react-bootstrap/Button";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ItemCount({ stock = 0, onAdd }) {
  const [rate, setRate] = useState(0);

  //Boton aumento de cantidad//
  const handleClickUp = () => {
    setRate(rate + 1);

    if (rate === stock) {
      setRate(stock);
    }
  };

  //Boton dismunicion de cantidad//
  const handleClickDown = () => {
    setRate(rate - 1);

    if (rate <= 0) {
      setRate(0);
    }
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
      {stock && rate ? (
        <Button className="btn btn-warning m-2" onClick={() => onAdd(rate)}>
          Add to Cart
        </Button>
      ) : (
        <Button variant="outline-warning" className="m-2" disabled>
          Add to Cart
        </Button>
      )}

      <ToastContainer />
    </>
  );
}

export default ItemCount;
