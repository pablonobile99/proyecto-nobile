const productos = [
    {id:1, nombre: "p1", precio: 10, img: "../public/Images/g1.jpg", idCat: "gato"},
    {id:2, nombre: "p2", precio: 20, img: "../public/Images/g2.jpg", idCat: "gato"},
    {id:3, nombre: "p3", precio: 30, img: "../public/Images/g3.jpg", idCat: "gato"},
    {id:4, nombre: "p4", precio: 10, img: "../public/Images/g1.jpg", idCat: "gato"},
    {id:5, nombre: "p5", precio: 20, img: "../public/Images/g2.jpg", idCat: "gato"},
    {id:6, nombre: "p6", precio: 30, img: "../public/Images/g3.jpg", idCat: "gato"},
    {id:7, nombre: "p7", precio: 10, img: "../public/Images/g1.jpg", idCat: "productos"},
    {id:8, nombre: "p8", precio: 20, img: "../public/Images/g2.jpg", idCat: "productos"},
    {id:9, nombre: "p9", precio: 30, img: "../public/Images/g3.jpg", idCat: "productos"},
    {id:10, nombre: "p10", precio: 10, img: "../public/Images/g1.jpg", idCat: "productos"},
    {id:11, nombre: "p11", precio: 20, img: "../public/Images/g2.jpg", idCat: "salud"},
    {id:12, nombre: "p12", precio: 30, img: "../public/Images/g3.jpg", idCat: "salud"},
    {id:13, nombre: "p13", precio: 10, img: "../public/Images/g1.jpg", idCat: "salud"},
    {id:14, nombre: "p14", precio: 20, img: "../public/Images/g2.jpg", idCat: "salud"},
    {id:15, nombre: "p15", precio: 30, img: "../public/Images/g3.jpg", idCat: "veterinaria"},
    {id:16, nombre: "p16", precio: 10, img: "../public/Images/g1.jpg", idCat: "veterinaria"},
    {id:17, nombre: "p17", precio: 20, img: "../public/Images/g2.jpg", idCat: "veterinaria"},
    {id:18, nombre: "p18", precio: 30, img: "../public/Images/g3.jpg", idCat: "veterinaria"}


]

export const getProductos = () => {
    return new Promise ((resolve)=>{
        setTimeout(() => {
            resolve(productos)
        }, 2000);
    })
}

export const getProductosCategoria = (idCategoria) => {
    return new Promise ((resolve)=>{
        setTimeout(() => {
            const productosCategoria = productos.filter(item => item.idCat === idCategoria)
            resolve(productosCategoria)
        }, 2000);
    })
}
