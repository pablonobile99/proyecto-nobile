import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, nombre, stock, precio, img, idCat, zona, tel, detail}) => {

  if(precio == 0){
    if(idCat=="profesionales"){
      precio = "Particular"
    } else{
      precio = "En adopcion"
    }
  }

  return (
    <>
      {
        stock > 0 ? (
          <div className='item-box'>
            <div className='item-box-img'>
              <img src={img} alt={nombre} className='item-img'/>
            </div>
            <h3 className='item-title'>{nombre}</h3>
            <p className='item-txt'>{idCat}</p>
            <div className='item-zona'>
              <img src="../..//public/images/gpsIcon.png" alt="gps" className='item-gps-icon'/>
              <p className='item-zona-txt'>{zona}</p>
            </div>
            <p className='item-txt'>
              {precio != "Particular" && precio != "En adopcion" ? ("$") : ("")}
              {precio}
            </p>
            <p className='item-txt'></p>
            <Link to={`/item/${id}`} className='link item-button'>
              <span className='item-txt-bot'>Ver Detalles</span>
            </Link>
          </div>
        ) : ("")
      }
    </>
  )
}

export default Item