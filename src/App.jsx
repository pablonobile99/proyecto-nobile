import React from 'react'
import Header from './componentes/Header/Header'
import Boton from './componentes/Header/Boton'
import ItemListConteinter from './componentes/ItemListConteinter/ItemListConteinter'
import Promesa from './componentes/Promesa/Promesa'

const App = () => {
  return (
    <>
        <Header titulo="Titulo principal"/>
        <ItemListConteinter/>
    </>
  )
}

export default App