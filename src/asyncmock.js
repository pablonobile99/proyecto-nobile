const productos = [
    {id:1, nombre: "p1", precio: 10, img: "../public/Images/g1.jpg"},
    {id:2, nombre: "p2", precio: 20, img: "../public/Images/g2.jpg"},
    {id:3, nombre: "p3", precio: 30, img: "../public/Images/g3.jpg"},
    {id:4, nombre: "p4", precio: 10, img: "../public/Images/g1.jpg"},
    {id:5, nombre: "p5", precio: 20, img: "../public/Images/g2.jpg"},
    {id:6, nombre: "p6", precio: 30, img: "../public/Images/g3.jpg"},
    {id:7, nombre: "p7", precio: 10, img: "../public/Images/g1.jpg"},
    {id:8, nombre: "p8", precio: 20, img: "../public/Images/g2.jpg"},
    {id:9, nombre: "p9", precio: 30, img: "../public/Images/g3.jpg"},
    {id:10, nombre: "p10", precio: 10, img: "../public/Images/g1.jpg"},
    {id:11, nombre: "p11", precio: 20, img: "../public/Images/g2.jpg"},
    {id:12, nombre: "p12", precio: 30, img: "../public/Images/g3.jpg"},
    {id:13, nombre: "p13", precio: 10, img: "../public/Images/g1.jpg"},
    {id:14, nombre: "p14", precio: 20, img: "../public/Images/g2.jpg"},
    {id:15, nombre: "p15", precio: 30, img: "../public/Images/g3.jpg"},
    {id:16, nombre: "p16", precio: 10, img: "../public/Images/g1.jpg"},
    {id:17, nombre: "p17", precio: 20, img: "../public/Images/g2.jpg"},
    {id:18, nombre: "p18", precio: 30, img: "../public/Images/g3.jpg"}


]

export const getProductos = () => {
    return new Promise ((resolve)=>{
        setTimeout(() => {
            resolve(productos)
        }, 2000);
    })
}

