import React, { useContext, useState } from 'react'
import { CarritoContext } from '../CarritoContext/CarritoContext'
import { db } from '../../services/config'
import { collection, addDoc , updateDoc , doc , getDoc} from 'firebase/firestore'

import "./Checkout.css"

const Checkout = () => {

    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")
    const [emailConfirmacion, setEmailConfirmacion] = useState("")
    const [error, setError] = useState("")
    const [ordenId, setOrdenId] = useState("")

    const {carrito, vaciarCarrito, total} = useContext(CarritoContext)

    const manejadorFormulario = (event) => {
        event.preventDefault()

        if(!nombre || !apellido || !telefono || !email || !emailConfirmacion ){
            setError("Complete todos los datos")
            return
        }

        if(email != emailConfirmacion){
            setError("Los email no coinciden")
            return
        }

        const orden = {
            items: carrito.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email
        };

        Promise.all(
            
            orden.items.map( async (productoOrden) =>{
                const productoRef = doc(db, "productos" , productoOrden.id)
                const prodcutoDoc = await getDoc(productoRef)
                const stockActual = prodcutoDoc.data().stock
                setError("Generando compra...")

                await updateDoc(productoRef , {
                    stock : stockActual - productoOrden.cantidad
                })
            })
        )
        .then(()=>{
            setError("")
            addDoc(collection(db, "ordenes"), orden)
                .then(docRef =>{
                    setOrdenId(docRef.id)
                    vaciarCarrito();
                })
                .catch(e=>{
                    console.log("error al crear orden" , e)
                    setError("error al crear la orden")
                })
        })
        .catch((e)=>{
            console.log("No se actualizo stock", e)
            setError("No se actualizo stock")
        })
        
    }

  return (
    <div className='checkout-body'>
        <div className='checkout-conteiner'>
            <h2 className='checkout-title'>Checkout Final</h2>

            <form onSubmit={manejadorFormulario}>

            {
                carrito.map(producto=>(
                    <div key={producto.item.id} className='checkout-item-conteiner'>
                        <div className='checkout-item-box1'>
                            <p className='checkout-item-info'>{producto.item.nombre} X {producto.cantidad} - ${producto.item.precio}</p>
                        </div>
                        <div className='checkout-item-box2'>
                            <div className='checkout-item-esp'/>
                            <p className='checkout-item-total'>${producto.item.precio*producto.cantidad}</p>
                        </div>
                    </div>
                ))
            }
                <div className='checkout-input-box'>
                    <label htmlFor="" className='txt checkout-label'>Nombre</label>
                    <br/>
                    <input type="text" className='txt checkout-input' onChange={(e)=>setNombre(e.target.value)}/>
                </div>
                <div className='checkout-input-box'>
                    <label htmlFor="" className='txt checkout-label'>Apellido</label>
                    <br/>
                    <input type="text" className='txt checkout-input' onChange={(e)=>setApellido(e.target.value)}/>
                </div>
                <div className='checkout-input-box'>
                    <label htmlFor="" className='txt checkout-label'>Telefono</label>
                    <br/>
                    <input type="text" className='txt checkout-input' onChange={(e)=>setTelefono(e.target.value)}/>
                </div>
                <div className='checkout-input-box'>
                    <label htmlFor="" className='txt checkout-label'>Email</label>
                    <br/>
                    <input type="email" className='txt checkout-input' onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className='checkout-input-box'>
                    <label htmlFor="" className='txt checkout-label'>Confirmacion de Email</label>
                    <br/>
                    <input type="email" className='txt checkout-input' onChange={(e)=>setEmailConfirmacion(e.target.value)}/>
                </div>

                <div  className='checkout-error-box'>
                    {
                        error && <p className='txt'>{error}</p>
                    }
                </div>
                
                <div className='checkout-button-conteiner'>
                    <button type='submit' className='boton checkout-button'>Confirmar compra</button>
                </div>
                
                <div className='checkout-order-box'>
                    {
                        ordenId && (
                            <strong className='txt'>
                                Gracias por tu compra. Tu numero de compra es {ordenId}
                            </strong>
                        )
                    }
                </div>
            </form>
        </div>
    </div>
  )
}

export default Checkout