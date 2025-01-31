import React, { useEffect, useState } from 'react'
import './boton.css'

const Boton = (props) => {

  const [Pestaña , rePestaña] = useState ('')

  useEffect(()=>{
    document.title = props.texto
  },[Pestaña])

  const BotonMenu = () => {
    rePestaña(props.texto)
  }

  return (
    <>
        <button onClick={BotonMenu} className='boton'>{props.texto}</button>
    </>
  )
}

export default Boton