import React from 'react'
import './boton.css'

const Boton = (props) => {
  return (
    <>
        <h1 className='boton'>{props.texto}</h1>
    </>
  )
}

export default Boton