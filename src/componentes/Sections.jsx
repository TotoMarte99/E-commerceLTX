import React from "react";
import { Link } from "react-router-dom";
import "../estilos/ItemSection.css";

function ItemForTop() {
  return (
    <div className="secciones_grid">
      <div className="header">
        <Link className="navigation3" to="/category/9">
          <h1>DIGITAL</h1>
        </Link>
      </div>

      <div className="menuIzquierdo">
        <Link className="navigation3" to="/category/8">
          <h1>CASUAL</h1>
        </Link>
      </div>
      <div className="principal">
        <Link className="navigation3" to="/category/7">
          <h1>LUXURY</h1>
        </Link>
      </div>

      <footer>
        <Link className="navigation3" to="/category/all">
          <h1>VIEW ALL</h1>
        </Link>
      </footer>
    </div>
  );
}

export default ItemForTop;
