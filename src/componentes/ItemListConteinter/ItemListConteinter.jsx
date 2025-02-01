import React, { useEffect, useState } from 'react'
import './ItemListConteinter.css'
import ItemList from '../ItemList/ItemList'
import { getProductos } from '../../asyncmock'


const ItemListConteinter = (props) => {

  const [productos, setProductos] = useState([])

  const pedirDatos = async () => {
    const inventario = await getProductos()
    setProductos(inventario)
  }
  
  pedirDatos();

  const [busqueda,setBusqueda] = useState ("")

  /* useEffect(()=>{
    productos.filter(c => c.id === 1).map(p =>{
      return(<ItemList productos={p}/>)
    })
  },[busqueda]) */

  /* const manejadorSubmit = (event) =>{
    event.preventDefault()
    console.log(event.target.busqueda.value)
    setBusqueda(event.target.busqueda.value)
    event.target.busqueda.value = ""
  } */

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