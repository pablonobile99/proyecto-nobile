import React, { useContext } from 'react'

import "./carrito.css"
import { CarritoContext } from '../CarritoContext/CarritoContext'
import { ItemCarrito } from '../Carrito/ItemCarrito'



const Carrito = () => {
  document.title = "AM Carrito"
  
  const {carrito, total, cantidadTotal} = useContext(CarritoContext)

  console.log(carrito)

  return (
    <div className='carrito-conteiner-box'>
        <h5>Tu carrito de productos:</h5>
        {carrito.map(e => <ItemCarrito key={e.item.id} item={e.item} cantidad={e.cantidad}/>)}
    </div>
  )
}

export default Carrito