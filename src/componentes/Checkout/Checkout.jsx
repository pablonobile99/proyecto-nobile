import React, { useContext, useState } from 'react'
import { CarritoContext } from '../CarritoContext/CarritoContext'
import { db } from '../../services/config'
import { collection, addDoc , updateDoc , doc , getDoc} from 'firebase/firestore'

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

        /* addDoc(collection(db, "ordenes"), orden)
            .then(docRef =>{
                setOrdenId(docRef.id)
                vaciarCarrito();
            })
            .catch(e=>{
                console.log("error al crear orden" , e)
                setError("error al crear la orden")
            }) */

        Promise.all(
            orden.items.map( async (productoOrden) =>{
                const productoRef = doc(db, "productos" , productoOrden.id)
                const prodcutoDoc = await getDoc(productoRef)
                const stockActual = prodcutoDoc.data().stockActual

                await updateDoc(productoRef , {
                    stock : stockActual - productoOrden.cantidad
                })
            })
        )
        .then(()=>{
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
    <div>
        <h2>Checkout Final</h2>

        <form onSubmit={manejadorFormulario}>

        {
            carrito.map(producto=>(
                <div key={producto.item.id}>
                    <p>{producto.item.nombre} X {producto.cantidad} - ${producto.item.precio}</p>
                    <p>${producto.item.precio*producto.cantidad}</p>
                    <hr />
                </div>
            ))
        }
            <div>
                <label htmlFor="">Nombre</label>
                <input type="text"  onChange={(e)=>setNombre(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="">Apellido</label>
                <input type="text" onChange={(e)=>setApellido(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="">Telefono</label>
                <input type="text" onChange={(e)=>setTelefono(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="">Email</label>
                <input type="email" onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="">Confirmacion de Email</label>
                <input type="email" onChange={(e)=>setEmailConfirmacion(e.target.value)}/>
            </div>
            {
                error && <p>{error}</p>
            }
            <button type='submit'>Confirmar compra</button>
            {
                ordenId && (
                    <strong>
                        Gracias por tu compra. Tu numero de compra es {ordenId}
                    </strong>
                )
            }
        </form>
    </div>
  )
}

export default Checkout