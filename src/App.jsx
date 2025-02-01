import React from 'react'

import Variables from './componentes/Variables/Variables'

import './App.css'

import Header from './componentes/Header/Header'
import Boton from './componentes/Header/Boton'
import ItemListConteinter from './componentes/ItemListConteinter/ItemListConteinter'
import JsonPlaceHolder from './componentes/JsonPlaceHolder/JsonPlaceHolder'
import Form from './componentes/Form/Form'

const App = () => {
  return (
    <div className='app-General'>
      <Variables/>
      <Header titulo="Adopta.me"/>
      <ItemListConteinter/>
      {/* <JsonPlaceHolder/> */}
      {/* <Form/> */}
    </div>
  )
}

export default App