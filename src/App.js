import React from "react";
import Navbar from "./componentes/Navbar";
import "./App.css";
import "./estilos/Navbar.css";
import "./estilos/allItemList.css";
import Vista from "./componentes/FirstImage";
import "./estilos/ItemsListContainer.css";
import ItemsListContainer from "./containers/ItemsListContainer";
import ImgPaymentsOptions from "./componentes/ImgPaymentsOptions";
import AllItemList from "./componentes/AllitemList";
import "./estilos/Firstimage.css";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import { Route, Routes } from "react-router-dom";
import Contact from "./componentes/Contact";
import "./estilos/Contact.css"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Vista />
              <h3 className="Texto-TopProducts">TOP PRODUCTS</h3>
              <div className="CardsBox">
                <ItemsListContainer />
              </div>
            </div>
          }
        />
        <Route
          path="/category/:idCategory"
          element={
            <div className="CardsBox2">
              <AllItemList />
            </div>
          }
        />
        <Route
          path="/category/all"
          element={
            <div className="CardsBox2">
              <AllItemList />
            </div>
          }
        />
        <Route path="/item/:idItem" element={<ItemDetailContainer />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>
      <ImgPaymentsOptions />
    </>
  );
}
export default App;
