import React from 'react'
import Header from './componentes/Header/Header'
import Boton from './componentes/Header/Boton'
import ItemListConteinter from './componentes/ItemListConteinter/ItemListConteinter'

const App = () => {
  return (
    <>
        <Header titulo="Titulo principal"/>
        <ItemListConteinter texto="esto seria una item de los que van adentro"/>
    </>
  )
}

export default App