import React from 'react';
import Navbar from './componentes/Navbar'
import './App.css'
import './estilos/Navbar.css'
import Vista from './componentes/FirstImage'
import './estilos/Vista1.css'
import './estilos/ItemsListContainer.css'
import ItemsListContainer from './componentes/ItemsListContainer'


function App(){
  return(
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
        <ItemsListContainer/>
        <>
          <a className='link_all' href="#home"><h3 className="Texto-TopProducts2">VIEW ALL THE PRODUCTS</h3></a>
        </>
    </div>
  )
}
export default App