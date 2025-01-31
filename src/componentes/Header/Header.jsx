import React from 'react'
import Boton from './Boton'
import './Header.css'

const Header = (props) => {
  return (
    <div className='header'>
        <h1 className='titulo-header'>{props.titulo}</h1>
        <Boton texto="Gatitos"/>
        <Boton texto="Productos"/>
        <Boton texto="Salud"/>
        <Boton texto="Veterinaria"/>
        <img src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png" alt="" className='img-header'/>
    </div>
  )
}

export default Header