import React, { useContext, useEffect, useState } from 'react'

/* import { getProductos, getProductosId } from '../../asyncmock' */
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

import './ItemDetail.css'
import Contador from '../Contador/Contador'
import { CarritoContext } from '../CarritoContext/CarritoContext'

import { db } from '../../services/config'
import {getDoc, doc } from 'firebase/firestore'


const ItemDetail = () => {

  const {agregarAlCarrito} = useContext(CarritoContext)

  const [producto, setProducto] = useState([])

  const { idProducto } = useParams();


    useEffect(()=>{
      const nuevoDoc = doc(db, "productos", idProducto)

      getDoc(nuevoDoc)
      .then (res => {
        const data = res.data()
        const nuevoProducto = {id: res.id, ...data}
        setProducto(nuevoProducto)
      })
      .catch(e => console.log(e))
    }, [idProducto])

      /* const miProducto = idProducto ? query(collection(db, "productos"), where ("id", "==" , idProducto)) : collection(db, "productos")

      console.log(idProducto)
  
      getDocs(miProducto)
      .then(res =>{
        const nuevoProducto = res.docs.map(doc => {
          const data = doc.data()
          console.log(data)
          return {id: doc.id, ...data}
        })
        setProducto(nuevoProducto)
      })
      .catch(e => console.log(e))
    }, [idProducto]) */


  /* useEffect(() => {

    const inventario = idProducto ? getProductosId : getProductos;

    inventario(idProducto)
      .then(res => {
        res.map(item => setProducto(item))
      })

  }, [idProducto]) */

  const [agregarCantidad, setAgregarCantidad] = useState(0);


  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);

    console.log("Productos agregados: " + cantidad + " de item " + producto.id);

    agregarAlCarrito(producto, cantidad) 
  }




  return (
    <div className='item-detail-box'>
      <h4 className='item-detail-title'>{producto.nombre}</h4>
      <div className='item-detail-box-img'>
        <img src={producto.img} alt={''} className='item-detail-img' />
      </div>
      <div className='item-detail-sep' />
      <p className='item-detail-info1'>{producto.idCat}</p>
      <p className='item-detail-precio'>${producto.precio}</p>
      <p className='item-detail-info2'>{producto.detail}</p>
      <div className='item-detail-datos-conteiner'>
        <p className='item-detail-datos'>{producto.zona}</p>
        <p className='item-detail-datos'>{producto.tel}</p>
      </div>

      <div className='conteiner-button'>
        {
          agregarCantidad > 0 ? (<Link to={`/carrito`} className='link boton-carrito'>Ir al carrito</Link>) : (<Contador inicial={1} stock={producto.stock} funcionAgregar={manejadorCantidad} />)
        }
      </div>

    </div>
  )
}

export default ItemDetail