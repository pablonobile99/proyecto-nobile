import React, { useEffect, useState } from 'react'
import './boton.css'
import ItemListConteinter from '../ItemListConteinter/ItemListConteinter'

const Boton = (props) => {

  const [Pestaña , rePestaña] = useState ('')

  /* useEffect(()=>{
    document.title = props.texto
  },[Pestaña]) */

  const BotonMenu = () => {
    rePestaña(()=>{
      document.title = props.texto
    })
  }

  return (
    <>
        <button onClick={BotonMenu} className='boton'>{props.texto}</button>
    </>
  )
}

export default Boton