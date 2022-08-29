import React from 'react';
import Navbar from './componentes/Navbar'
import './App.css'
import './estilos/Navbar.css'
import Vista from './componentes/Vista1'
import './estilos/Vista1.css'
import './estilos/TopProducts.css'
import Cards from './componentes/Cards'

function App(){
  return(
    <div>
      <div>
      <Navbar />
      </div>
      <div>
        <Vista />
      </div>
        <div>
            <p className="Texto-TopProducts">TOP PRODUCTS</p>
        </div>
        <Cards/>
    </div>
  )
}
export default App