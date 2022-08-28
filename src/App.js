import React from 'react';
import Navbar from './componentes/Navbar'
import './App.css'
import './estilos/Navbar.css'
import Vista from './componentes/Vista1'
import './estilos/Vista1.css'
import TopProducts from './componentes/TopProducts';
import './estilos/TopProducts.css'


function App(){
  return(
    <div>
      <div>
      <Navbar />
      </div>
      <div>
        <Vista />
      </div>
      <section>
        <TopProducts />
      </section>
    </div>
  )
}
export default App