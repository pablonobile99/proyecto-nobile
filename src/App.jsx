import React, { createContext, useContext } from 'react'

import Variables from './componentes/Variables/Variables'

import './App.css'



import Header from './componentes/Header/Header'
import Boton from './componentes/Header/Boton'
import ItemListConteinter from './componentes/ItemListConteinter/ItemListConteinter'

import JsonPlaceHolder from './componentes/JsonPlaceHolder/JsonPlaceHolder'
import Form from './componentes/Form/Form'


import { BrowserRouter , Routes , Route } from 'react-router-dom'
import ItemDetail from './componentes/ItemDetail/ItemDetail'
import Carrito from './componentes/Carrito/Carrito'
import { CarritoProvider } from './componentes/CarritoContext/CarritoContext'
import Checkout from './componentes/Checkout/Checkout'

import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';


const App = () => {

  return (
    
    <BrowserRouter>
      <CarritoProvider>
        <div className='app-General'>
          <Variables/>
          <Header titulo="Adopta.me"/>
          <Routes>
            <Route path='/' element = {<ItemListConteinter/>}/>
            <Route path='/categoria/:idCategoria' element = {<ItemListConteinter/>}/>
            <Route path='/item/:idProducto' element = {<ItemDetail/>}/>
            <Route path='/carrito' element = {<Carrito/>}/>
            <Route path='/checkout' element = {<Checkout/>}/>
          </Routes>
        </div>
      </CarritoProvider>
      <ToastContainer />
    </BrowserRouter>

  )
}

export default App


