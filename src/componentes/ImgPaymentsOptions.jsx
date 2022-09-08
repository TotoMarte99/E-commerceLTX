import React from "react";
import PaymentImg from "../imagenes/mediosdepago.png";

function PaymentMethod() {
  return (
    <>
      <img className="img-cash w-100" src={PaymentImg} alt="PaymentMethods" />
    </>
  );
}

export default PaymentMethod;
