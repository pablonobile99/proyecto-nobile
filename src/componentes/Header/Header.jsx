import React from 'react'
import Boton from './Boton'
import './Header.css'

const Header = (props) => {
  return (
    <>
        <h1>{props.titulo}</h1>
        <Boton texto="comprar"/>
        <Boton texto="productos"/>
        <img src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png" alt="" />
    </>
  )
}

export default Header