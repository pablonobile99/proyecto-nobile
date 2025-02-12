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
        <div className='item-detail-sep'/>
        <p className='item-detail-info1'>{producto.idCat}</p>
        <p className='item-detail-precio'>Precio: {producto.precio}</p>
        <p className='item-detail-info2'>{producto.id}</p>
        <div className='conteiner-button'>
          <button className='item-detail-button'>
            <Link to={`/`} className='link' >Inicio</Link>
          </button>
        </div>

    </div>
  )
}

export default ItemDetail