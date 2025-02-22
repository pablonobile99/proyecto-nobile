import React, { useContext } from 'react'
import "./ItemCarrito.css"

import { CarritoContext } from '../CarritoContext/CarritoContext'


export const ItemCarrito = ({item,cantidad}) => {

    const {eliminarProducto} = useContext(CarritoContext)

    const eliminar = () => {
      eliminarProducto(item.id)
    }

    if(item.precio == 0){
      if(item.idCat=="profecionales"){
        item.precio = "Particular"
      } else{
        item.precio = "En adopcion"
      }
    }
  
  return (
    <div className='item-box-carrito'>
        <div className='item-box-img-carrito'>
          <img src={item.img} alt={item.nombre} className='item-img'/>
        </div>
        <h3 className='item-title-carrito'>{item.nombre}</h3>
        <p className='item-txt-carrito'>{item.idCat}</p>
        <div className='item-zona-carrito'>
          <img src="../..//public/images/gpsIcon.png" alt="gps" className='item-gps-icon-carrito'/>
          <p className='item-zona-txt-carrito'>{item.zona}</p>
        </div>
        <p className='item-txt-carrito'> {item.precio}</p>
        <p className='item-txt-carrito'>cantidad: {cantidad}</p>
        <div className='item-button-carrito'>
          <button onClick={eliminar} className='boton'>eliminar</button>
        </div>
    </div>
  )
}
