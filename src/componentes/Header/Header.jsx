import React from 'react'
import Boton from './Boton'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = (props) => {
  return (
    <div className='header'>
        
        <h1 className='titulo-header'><Link to={'/'}>{props.titulo}</Link></h1>
        <Link to={'/'}>
          <Boton texto="Inicio"/>
        </Link>
        <Link to={'/categoria/gato'}>
          <Boton texto="Gatitos"/>
        </Link>
        <Link to={'/categoria/productos'}>
          <Boton texto="Productos"/>
        </Link>
        <Link to={'/categoria/salud'}>
          <Boton texto="Salud"/>
        </Link>
        <Link to={'/categoria/veterinaria'}>
          <Boton texto="Veterinaria"/>
        </Link>
        <img src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png" alt="" className='img-header'/>
    </div>
  )
}

export default Header