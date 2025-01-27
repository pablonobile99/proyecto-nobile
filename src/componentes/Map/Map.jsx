import React, { useEffect, useState } from 'react'
import { getProductos } from '../../asyncmock'

const Map = () => {

    const [productos, setProductos] = useState([])

    useEffect(()=>{
        getProductos()
        .then(respuesta => setProductos(respuesta))
        .catch(error => console.log(error))
    },[])

   /*  const producto = [
        {id:1, nombre: "p1", precio: 10},
        {id:2, nombre: "p2", precio: 20},
        {id:3, nombre: "p3", precio: 30}
    ] */


  return (
    <div>
        <h3>Producto:</h3>
        <ul>
            {productos.map((productos)=>(
                <li key={productos.id}>
                    <span>{productos.nombre}</span>
                    <span>{productos.precio}</span>
                </li>
            ))}
        </ul>
        {/* {procuctos.map(item => )} */}
    </div>
  )
}

export default Map