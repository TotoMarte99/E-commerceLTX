import React from "react";
import Navbar from "./componentes/Navbar";
import "./App.css";
import "./estilos/Navbar.css";
import "./estilos/allItemList.css";
import Vista from "./paginas/FirstImage";
import "./estilos/ItemsListContainer.css";
import ItemsListContainer from "./containers/ItemsListContainer";
import ImgPaymentsOptions from "./paginas/ImgPaymentsOptions";
import AllItemList from "./componentes/AllitemList";
import "./estilos/Firstimage.css";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import { Route, Routes } from "react-router-dom";
import Contact from "./paginas/Contact";
import "./estilos/Contact.css";
import DataProvider from "./context/CartContext";
import CheckOutCart from "./componentes/CheckOutCart";

function App() {
  return (
    <DataProvider>
      <Navbar />
      <Routes>
        <Route
          path="/E-commerceLTX"
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

        <Route
          path="/cart"
          element={
            <div className="CardsBox2">
              <AllItemList />
            </div>
          }
        />

        <Route path="/category/cartCheckOut" element={<CheckOutCart />} />
      </Routes>
      <ImgPaymentsOptions />
    </DataProvider>
  );
}
export default App;
