import React, { useEffect, useState } from 'react'

const JsonPlaceHolder = () => {

    const [usuarios, setUsuarios] = useState([])

    /* fetch("https://jsonplaceholder.typicode.com/users")
    .then(respuesta => respuesta.json())
    .then(res => setUsuarios(res))
    .catch(Error => console.log(Error)); */

    useEffect(()=>{

    },[])

    try{
        const pedirUsuarios = async () => {
            const resp = await fetch("https://jsonplaceholder.typicode.com/users")
            const data = await resp.json()
            setUsuarios(data)
        }

        pedirUsuarios();
    } catch(err){
        console.log(err)
    }

  return (
    <div>
        <h4>usuarios:</h4>
        <ul>
            {
                usuarios.map(usuario =>{
                    return(
                        <li key={usuario.id}>
                            <div>{usuario.name}</div>      
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default JsonPlaceHolder