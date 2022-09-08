import React from "react";
import Navbar from "./componentes/Navbar";
import "./App.css";
import "./estilos/Navbar.css";
import Vista from "./componentes/FirstImage";
import "./estilos/ItemsListContainer.css";
// import ItemsListContainer from "./containers/ItemsListContainer";
import ImgPaymentsOptions from "./componentes/ImgPaymentsOptions";
import "./estilos/Firstimage.css";
import ItemDetailContainer from "./containers/ItemDetailContainer";
function App() {
  return (
    <div>
      <>
        <Navbar />
      </>
      <>
        <Vista />
      </>
      <>
        <h3 className="Texto-TopProducts">TOP PRODUCTS</h3>
      </>
        <div className="CardsBox">
         {/* <ItemsListContainer />  */}
        </div>
        <ItemDetailContainer />
      <>
        <a className="link_all" href="#home">
          <h3 className="Texto-TopProducts2">VIEW ALL THE PRODUCTS</h3>
        </a>
      </>
      <>
        <ImgPaymentsOptions />
      </>
    </div>
  );
}
export default App;
