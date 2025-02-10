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

/* 
  const pedirDatos = async () => {
    const inventario = idCategoria? await getProductosCategoria() : await getProductos();
    setProductos(inventario)
  }
  
  pedirDatos();

  const [busqueda,setBusqueda] = useState ("") */


  return (
    <div className='item-body'>
      <h2>Gatitos:</h2>

      {/* <form onSubmit={manejadorSubmit}>
        <input type="text" name='busqueda' />
        <button className='boton' type='submit'>Buscar</button>
      </form> */}

      <div className='item-list-conteiner-box'>
        <ItemList productos={productos}/>
      </div>
    </div>
  )
}

export default ItemListConteinter