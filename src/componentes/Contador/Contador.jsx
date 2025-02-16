import React, { useState } from 'react'
import "./Contador.css"

const Contador = ({inicial, stock, funcionAgregar}) => {

    const [contador, setContador] = useState(inicial);

    const sumarContador = () => {
        if(contador < stock){
            setContador(contador + 1)
        }
    }

    const restarContador = () => {
        if(contador > inicial){
            setContador(contador - 1)
        }
    }

  return (
    <div className='box-contador'>
        <button onClick={restarContador} className='boton-carrito-contador'> - </button>
        <strong className='carrito-contador'> {contador} </strong>
        <button onClick={sumarContador} className='boton-carrito-contador'> + </button>
        <button onClick={()=>funcionAgregar(contador)} className='boton-carrito-contador'>Agregar al carrito</button>
    </div>
  )
}

export default Contador