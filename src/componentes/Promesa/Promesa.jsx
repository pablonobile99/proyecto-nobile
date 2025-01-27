import React from 'react'

const Promesa = () => {

    setTimeout(() => {
        console.log("Tarea A")
    }, 3000);


    setTimeout(() => {
        console.log("Tarea B")
    }, 1500);

  return (
    <div>Promesa</div>
  )
}

const falsaPromesa = (estado) => {
    return new Promise((resolve,reject)=>{
        if(estado){
            resolve("cumplido")
        } else {
            reject("rechazado")
        }
    })
}

//console.log(falsaPromesa(false))

falsaPromesa(false)
.then(()=>{
    console.log("cumplido x2")
})
.catch(()=>{
    console.log("nope")
})
export default Promesa