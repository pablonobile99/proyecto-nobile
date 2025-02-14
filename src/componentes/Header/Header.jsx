import React from 'react'
import Boton from './Boton'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = (props) => {
  return (
    <div className='header'>
        
        <h1 className='titulo-header'><Link to={'/'} className='link' >{props.titulo}</Link></h1>
        <Link to={'/'} className='link' >
          <Boton texto="Inicio"/>
        </Link>
        <Link to={'/categoria/gato'} className='link' >
          <Boton texto="Gatitos"/>
        </Link>
        <Link to={'/categoria/productos'} className='link' >
          <Boton texto="Productos"/>
        </Link>
        <Link to={'/categoria/salud'} className='link' >
          <Boton texto="Salud"/>
        </Link>
        <Link to={'/categoria/veterinaria'} className='link' >
          <Boton texto="Veterinaria"/>
        </Link>
        <Link to={'/carrito'} className='link'>
          <div className='img-header-box'>
            {/* <img src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png" alt="" className='img-header'/> */}
            <img src="../../public/Images/carrito.png" alt="" className='img-header'/>
          
          </div>
          </Link>
        
        
    </div>
  )
}

export default Header