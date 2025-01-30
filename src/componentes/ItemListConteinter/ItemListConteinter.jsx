import React, { useEffect, useState } from 'react'
import './ItemListConteinter.css'
import ItemList from '../ItemList/ItemList'
import { getProductos } from '../../asyncmock'


const ItemListConteinter = (props) => {

  const [productos, setProductos] = useState([])
  
  useEffect(()=>{
      getProductos()
      .then(respuesta => setProductos(respuesta))
      .catch(error => console.log(error))
  },[])


  return (
    <div>
    <h2>Gatitos:</h2>
    <ItemList productos={productos}/>
    </div>
  )
}

export default ItemListConteinter