import React, { useContext } from 'react'
import "./ItemCarrito.css"

import { CarritoContext } from '../CarritoContext/CarritoContext'


export const ItemCarrito = ({item,cantidad}) => {

    const {eliminarProducto} = useContext(CarritoContext)

    const eliminar = () => {
      eliminarProducto(item.id)
    }
  
  return (
    <div className='item-box'>
        <div className='item-box-img'>
        <img src={item.img} alt={item.nombre} className='item-img'/>
        </div>
        <h3 className='item-title'>{item.nombre}</h3>
        <p className='item-txt'>{item.idCat}</p>
        <div className='item-zona'>
        <img src="../..//public/images/gpsIcon.png" alt="gps" className='item-gps-icon'/>
        <p className='item-zona-txt'>{item.zona}</p>
        </div>
        <p className='item-txt'> {item.precio}</p>
        <p className='item-txt'></p>
        <p>cantidad: {cantidad}</p>
        <button onClick={eliminar}>eliminar</button>
    </div>
  )
}
