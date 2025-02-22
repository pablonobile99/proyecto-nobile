import React, { useEffect, useState } from 'react'
import './ItemListConteinter.css'
import ItemList from '../ItemList/ItemList'
import { getProductos, getProductosCategoria } from '../../asyncmock'
import { useParams } from 'react-router-dom'


const ItemListConteinter = (props) => {

  const [productos, setProductos] = useState([])

  const {idCategoria} = useParams();

  useEffect(() => {

    const inventario = idCategoria? getProductosCategoria : getProductos;

    inventario(idCategoria)
    .then(res => setProductos(res))

  }, [idCategoria])


  return (
    <div className='item-body'>
      <div className='item-list-conteiner-box'>
        <ItemList productos={productos}/>
      </div>
    </div>
  )
}

export default ItemListConteinter