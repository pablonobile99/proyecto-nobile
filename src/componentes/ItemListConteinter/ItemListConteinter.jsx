import React from 'react'
import './ItemListConteinter.css'

const ItemListConteinter = (props) => {
  return (
    <h2 className='ItemBox'>{props.texto}</h2>
  )
}

export default ItemListConteinter