const productos = [
    {id:1, nombre: "Pepe", precio: "En adopcion", img: "../public/Images/g1.jpg", idCat: "gato", detail: "Hola soy un gato bonito"},
    {id:2, nombre: "Mishi", precio: "En adopcion", img: "../public/Images/g2.jpg", idCat: "gato", detail: "Hola soy un gato bonito"},
    {id:3, nombre: "Saga", precio: "En adopcion", img: "../public/Images/g3.jpg", idCat: "gato", detail: "Hola soy un gato bonito"},
    {id:4, nombre: "Poncho", precio: "En adopcion", img: "../public/Images/g4.jpg", idCat: "gato", detail: "Hola soy un gato bonito"},
    {id:5, nombre: "Hipo", precio: "En adopcion", img: "../public/Images/g5.jpg", idCat: "gato", detail: "Hola soy un gato bonito"},
    {id:6, nombre: "Spike", precio: "En adopcion", img: "../public/Images/g6.jpg", idCat: "gato", detail: "Hola soy un gato bonito"},
    {id:7, nombre: "Transportadora para gatos", precio: "15.000$", img: "../public/Images/transp.jpg", idCat: "productos", detail: "transportadora myuy bonita"},
    {id:8, nombre: "Rascador", precio: "9.900$", img: "../public/Images/rasca.png", idCat: "productos", detail: "rascador bonito para tu gato"},
    {id:9, nombre: "Juguete de ratón", precio: "5.400$", img: "../public/Images/raton.jpg", idCat: "productos", detail: "jugete bonito"},
    {id:10, nombre: "Arnes para gato", precio: "8.000$", img: "../public/Images/arnes.png", idCat: "productos", detail: "arnes para gatos bonitos"},
    {id:11, nombre: "Pipeta para gatos", precio: "5.000$", img: "../public/Images/pipeta.jpg", idCat: "salud", detail: "pipeta para gatos bonitos"},
    {id:12, nombre: "Comida balanceada xKg", precio: "3.750$", img: "../public/Images/comida.jpg", idCat: "salud", detail: "comida para gatos bonitos"},
    {id:13, nombre: "Comida gatos bebe x Kg", precio: "4.600$", img: "../public/Images/bebe.jpg", idCat: "salud", detail: "comida para gatos bebes bonitos"},
    {id:14, nombre: "Piedras de arenero Bolsa 2Kg", precio: "7.000$", img: "../public/Images/piedras.png", idCat: "salud", detail: "piedras para gatos bonitos"},
    {id:15, nombre: "Veterinario El Salvador", precio: "-", img: "../public/Images/v1.jpg", idCat: "veterinaria", detail: "veterinaria bonita a la calle"},
    {id:16, nombre: "Particular PetPet", precio: "-", img: "../public/Images/v2.jpg", idCat: "veterinaria", detail: "veterinaria bonita a la calle"},
    {id:17, nombre: "Veterinario particular", precio: "-", img: "../public/Images/v3.jpg", idCat: "veterinaria", detail: "veterinaria bonita a la calle"},
    {id:18, nombre: "Veterinaria Mascotitas", precio: "-", img: "../public/Images/v4.jpg", idCat: "veterinaria", detail: "veterinaria bonita a la calle"}


]

export const getProductos = () => {
    return new Promise ((resolve)=>{
        setTimeout(() => {
            resolve(productos)
        }, 1000);
    })
}

export const getProductosCategoria = (idCategoria) => {
    return new Promise ((resolve)=>{
        setTimeout(() => {
            const productosCategoria = productos.filter(item => item.idCat === idCategoria)
            resolve(productosCategoria)
        }, 1000);
    })
}

export const getProductosId = (idProducto) => {
    return new Promise ((resolve)=>{
        setTimeout(() => {
            const productosId = productos.filter(item => item.id == idProducto)
            resolve(productosId)
        }, 1000);
    })
}

