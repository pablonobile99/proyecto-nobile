import React, { useContext } from 'react'

import "./carrito.css"
import { CarritoContext } from '../CarritoContext/CarritoContext'
import { ItemCarrito } from '../Carrito/ItemCarrito'



const Carrito = () => {
  document.title = "AM Carrito"
  
  const {carrito, total, cantidadTotal, vaciarCarrito} = useContext(CarritoContext)

  console.log(carrito)

  const precioTotal = total? total : 0
  const cantidadTotalFinal = cantidadTotal? cantidadTotal : 0

  return (
    <div className='carrito-conteiner-box'>
        <h5>Tu carrito de productos:</h5>
        <button onClick={vaciarCarrito}>Vaciar carrito</button>
        {carrito.map(e => <ItemCarrito key={e.item.id} item={e.item} cantidad={e.cantidad}/>)}
        <p>cantidad total: {cantidadTotal}</p>
        <p>total: {precioTotal}</p>
    </div>
  )
}

export default Carrito