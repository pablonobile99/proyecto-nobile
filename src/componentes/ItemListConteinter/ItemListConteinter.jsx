import React, { useEffect, useState } from 'react'
import './ItemListConteinter.css'
import ItemList from '../ItemList/ItemList'
/* import { getProductos, getProductosCategoria } from '../../asyncmock' */
import { useParams } from 'react-router-dom'
import { db } from '../../services/config'
import { collection, getDocs, query, where } from 'firebase/firestore'

const ItemListConteinter = (props) => {

  const [productos, setProductos] = useState([])

  const {idCategoria} = useParams();

  useEffect(()=>{
    const misProductos = idCategoria ? query(collection(db, "productos"), where ("idCat", "==" , idCategoria)) : collection(db, "productos")

    getDocs(misProductos)
    .then(res =>{
      console.log(res)
      const nuevosProductos = res.docs.map(doc => {
        const data = doc.data()
        return {id: doc.id, ...data}
      })
      setProductos(nuevosProductos)
    })
    .catch(e => console.log(e))
  }, [idCategoria])

/*   useEffect(() => {

    const inventario = idCategoria? getProductosCategoria : getProductos;

    inventario(idCategoria)
    .then(res => setProductos(res))

  }, [idCategoria]) */


  return (
    <div className='item-body'>
      <div className='item-list-conteiner-box'>
        <ItemList productos={productos}/>
      </div>
    </div>
  )
}

export default ItemListConteinter