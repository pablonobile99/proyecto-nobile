import React, { useState } from 'react'
import emailjs from '@emailjs/browser'

const Form = () => {

    const [nombre, setNombre] = useState ("")
    const [email, setEmail] = useState ("")
    const [mensaje, setMensaje] = useState("")

    const enviarMensaje = (e) =>{
        e.preventDefault();
        const TempleParams = {
            from_name: nombre,
            from_email: email,
            message: mensaje
        }

        emailjs.send(
            "service_0zgiw4x",
            "template_hd9nqhp",
            TempleParams,
            "99chQo2F58IOJ8UP8"
        )
        .then(()=>console.log("Mensaje enviado"))
        .catch(error => console.log(error))

        setEmail("")
        setMensaje("")
        setNombre("")
    }


  return (
    <div>
        <form onSubmit={enviarMensaje}>
            <label htmlFor="">Nombre</label>
            <input type="text" value={nombre} onChange={(e)=>setNombre(e.target.value)}/>

            <label htmlFor="">email</label>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>

            <label htmlFor="">Nombre</label>
            <textarea name="" id="" cols="30" rows ="10" value={mensaje} onChange={(e)=>setMensaje(e.target.value)}></textarea>

            <button type='submit'> Enviar mensaje</button>

        </form>
    </div>
  )
}

export default Form