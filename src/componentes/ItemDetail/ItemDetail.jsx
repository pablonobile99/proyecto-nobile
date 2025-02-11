import React, { useEffect, useState } from 'react'

import { getProductos, getProductosId } from '../../asyncmock'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

import './ItemDetail.css'


const ItemDetail = () => {

    const [producto, setProducto] = useState([])

    const {idProducto} = useParams();
  
    useEffect(() => {
  
      const inventario = idProducto? getProductosId : getProductos;
  
      inventario(idProducto)
      .then(res => {
        res.map(item => setProducto(item))
      })
  
    }, [idProducto])

    console.log(producto)


  return (
    <div className='item-detail-box'>
        <h4 className='item-detail-title'>{producto.nombre}</h4>
        <div className='item-detail-box-img'>
            <img src={producto.img} alt={''} className='item-detail-img'/>
        </div>

        <p>{producto.idCat}</p>
        <p className='item-detail-txt'>Precio: {producto.precio}</p>
        <p className='item-detail-txt'>{producto.id}</p>
        <button className='item-detail-button'>
          <Link to={`/`}>Inicio</Link>
        </button>
    </div>
  )
}

export default ItemDetail