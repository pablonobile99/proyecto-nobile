import React, { useEffect, useState } from 'react'
import './ItemListConteinter.css'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { db } from '../../services/config'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { Loaded } from '../Loaded/Loaded'

const ItemListConteinter = (props) => {

  const [productos, setProductos] = useState([])

  const {idCategoria} = useParams();

  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    setLoading(true)
    const misProductos = idCategoria ? query(collection(db, "productos"), where ("idCat", "==" , idCategoria)) : collection(db, "productos")

    getDocs(misProductos)
    .then(res =>{
      const nuevosProductos = res.docs.map(doc => {
        const data = doc.data()
        return {id: doc.id, ...data}
      })
      setProductos(nuevosProductos)
    })
    .catch(e => console.log(e))
    .finally(e => {
      setLoading(false)
    })
  }, [idCategoria]);


  return (
    <div className='item-body'>
      <div className='item-list-conteiner-box'>
        {
          loading ? <Loaded/> :        <ItemList productos={productos}/>

        }
      </div>
    </div>
  )
}

export default ItemListConteinter