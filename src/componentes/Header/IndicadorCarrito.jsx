import React, { useContext } from 'react'
import { CarritoContext } from '../CarritoContext/CarritoContext'
import { Link } from 'react-router-dom'

import "./IndicadorCarrito.css"

const IndicadorCarrito = () => {

const {carrito} = useContext(CarritoContext)

  return (
    <div className='indicador-conteiner'>
        <p className='indicador-valor'>{carrito.length}</p>
    </div>
  )
}

export default IndicadorCarrito