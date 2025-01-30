import React from 'react'
import './Item.css'

const Item = ({id, nombre, precio, img}) => {

  return (

    <div className='item-box'>
        <img src={img} alt={nombre} className='item-img'/>
        <h3 className='item-title'>{nombre}</h3>
        <p className='item-txt'>Precio: {precio}</p>
        <p className='item-txt'>{id}</p>
        <button className='item-button'>Ver Detalles</button>
    </div>
  )
}

export default Item