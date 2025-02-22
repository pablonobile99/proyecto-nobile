import React, { useContext } from 'react'

import "./carrito.css"
import { CarritoContext } from '../CarritoContext/CarritoContext'
import { ItemCarrito } from '../Carrito/ItemCarrito'




const Carrito = () => {
  document.title = "AM Carrito"
  
  const {carrito, total, cantidadTotal, vaciarCarrito} = useContext(CarritoContext)

  const precioTotal = total? total : 0
  const cantidadTotalFinal = cantidadTotal? cantidadTotal : 0


  return (
    <div className='carrito-conteiner-box'>
        <h5 className='carrito-title'>Tu carrito de productos:</h5>
        <div className='carrito-eliminar-boton'>
          <button onClick={vaciarCarrito} className='boton'>Vaciar carrito</button>
        </div>
        <div className='carrito-productos'>
          {carrito.map(e => <ItemCarrito key={e.item.id} item={e.item} cantidad={e.cantidad}/>)}    
        </div>
        <div className='carrito-data'>
          <p className='carrito-cantidad-total'>cantidad total: {cantidadTotal}</p>
          <p className='carrito-precio-total'>total: {precioTotal}</p>
        </div>
        <div className='carrito-finalizar-boton'>
          <button className='boton'>Finalizar Compra</button>
        </div>
       
    </div>
  )
}

export default Carrito