import React from "react";
import Card from "./Item";
import Reloj1 from "../Fotos relojes/Digitales/Reloj_Smartwatch_Amazfit_GTS_2_Mini_40mm_Black_by_XIAOMI_tab_1.png";
import Reloj2 from "../Fotos relojes/Digitales/xiaomi-pulsera-de-actividad-mi-band-6.jpg";
import Reloj3 from "../Fotos relojes/Digitales/Casuales/SAN-40-10.jpg";

function ItemListContainer() {
  return (
    <div className="CardsBox">
      <Card
        stock={5}
        src={Reloj1}
        Title="Xiaomi Band 8"
        Text="10' Touch Screen, NFC tecnology, +10 days battery"
      />
      ;
      <Card
        stock={3}
        src={Reloj2}
        Title="Xiaomi MI Smart Band 6"
        Text="1.56' Amoled Screen, Withstands up to 50m underwater, "
      />
      ;
      <Card
        stock={2}
        src={Reloj3}
        Title="Casio Sport"
        Text="Water resistant, Classic clock functions, and more"
      />
    </div>
  );
}
export default ItemListContainer;
