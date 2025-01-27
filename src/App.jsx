import React from 'react'
import Header from './componentes/Header/Header'
import Boton from './componentes/Header/Boton'
import ItemListConteinter from './componentes/ItemListConteinter/ItemListConteinter'
import ItemCount from './componentes/IntemCount/IntemCount'
import Promesa from './componentes/Promesa/Promesa'
import Map from './componentes/Map/Map'

const App = () => {
  return (
    <>
        <Header titulo="Titulo principal"/>
        <ItemListConteinter texto="esto seria una item de los que van adentro"/>
        {/* <ItemCount stock={10}/>
        <Promesa/> */}
        <Map/>
    </>
  )
}

export default App