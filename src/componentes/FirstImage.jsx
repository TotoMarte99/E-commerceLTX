import React from "react";
import Imagen from '../imagenes/Img.png';


function Vista () {
    return(
        <div className="container-img">
            <img className="img" src={Imagen} alt="Imagen"/>
        </div>
        
    )
}

export default Vista;