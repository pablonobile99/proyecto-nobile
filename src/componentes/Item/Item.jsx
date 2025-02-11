import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, nombre, precio, img, idCat}) => {

  return (

    <div className='item-box'>
        <div className='item-box-img'>
          <img src={img} alt={nombre} className='item-img'/>
        </div>
        <h3 className='item-title'>{nombre}</h3>
        <p>{idCat}</p>
        <p className='item-txt'>Precio: {precio}</p>
        <p className='item-txt'>{id}</p>
        <button className='item-button'>
          <Link to={`/item/${id}`}>Ver Detalles</Link>
        </button>
    </div>
  )
}

export default Item