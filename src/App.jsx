import React from 'react'

import Variables from './componentes/Variables/Variables'

import './App.css'



import Header from './componentes/Header/Header'
import Boton from './componentes/Header/Boton'
import ItemListConteinter from './componentes/ItemListConteinter/ItemListConteinter'
import JsonPlaceHolder from './componentes/JsonPlaceHolder/JsonPlaceHolder'
import Form from './componentes/Form/Form'

import { BrowserRouter , Routes , Route } from 'react-router-dom'
import ItemDetail from './componentes/ItemDetail/ItemDetail'

const App = () => {
  return (
    <BrowserRouter>
      <div className='app-General'>
      <Variables/>
      <Header titulo="Adopta.me"/>
      <Routes>
        <Route path='/' element = {<ItemListConteinter/>}/>
        <Route path='/categoria/:idCategoria' element = {<ItemListConteinter/>}/>
        <Route path='/item/:idProducto' element = {<ItemDetail/>}/>
      </Routes>
    </div>
    </BrowserRouter>

  )
}

export default App


