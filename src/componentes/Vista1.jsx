import React from "react";
import Imagen from '../imagenes/SHOP.svg';


function Vista () {
    return(
        <div className="container-img">
            <div>
                <img className="img" src={Imagen} alt="Imagen" />
    
            </div>
        </div>
        
    )
}

export default Vista;