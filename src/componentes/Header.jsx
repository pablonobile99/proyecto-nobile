import React from 'react'
import Boton from './Header/Boton'

const Header = (props) => {
  return (
    <>
        <h1>{props.titulo}</h1>
        <Boton texto="comprar"/>
        <Boton texto="productos"/>

    </>
  )
}

export default Header