import React from 'react'
import './Item.css'

const Item = ({id, nombre, precio, img}) => {

  return (

    <a href='' className='item-box'>
        <div className='item-box-img'>
          <img src={img} alt={nombre} className='item-img'/>
        </div>
        <h3 className='item-title'>{nombre}</h3>
        <p className='item-txt'>Precio: {precio}</p>
        <p className='item-txt'>{id}</p>
        <button className='item-button'>Ver Detalles</button>
    </a>
  )
}

export default Item