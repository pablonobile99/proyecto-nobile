import React from 'react'

import Variables from './componentes/Variables/Variables'

import './App.css'

import Header from './componentes/Header/Header'
import Boton from './componentes/Header/Boton'
import ItemListConteinter from './componentes/ItemListConteinter/ItemListConteinter'
import Promesa from './componentes/Promesa/Promesa'


const App = () => {
  return (
    <div className='app-General'>
      <Variables/>
      <Header titulo="Adopta.me"/>
      <ItemListConteinter/>
    </div>
  )
}

export default App