import React from 'react';
import Card from './Card';
import Reloj1 from '../Fotos relojes/Digitales/Reloj_Smartwatch_Amazfit_GTS_2_Mini_40mm_Black_by_XIAOMI_tab_1.png';
import Reloj2 from '../Fotos relojes/Digitales/xiaomi-pulsera-de-actividad-mi-band-6.jpg';
import Reloj3 from '../Fotos relojes/Digitales/Casuales/SAN-40-10.jpg';


function Cards(){
    return(
        <div className='CardsBox'>
            <div>
                <Card src={Reloj1} Title="Xiaomi Band 8" Text="10' Touch Screen, NFC tecnology, +10 days battery"/>
            </div>
            <div>
                <Card src={Reloj2}  Title="Xiaomi MI Samrt Band 6" Text="1.56' Amoled Screen, Withstands up to 50m underwater, "/>
            </div>
            <div>
                <Card src={Reloj3} Tittle="Casio Sport" Text="Water resistant, Classic clock functions, and more functions,"/>
            </div> 
        </div>
        

    )
}
export default Cards;