const productos = [
    {id:1, nombre: "p1", precio: 10, img: "../public/Images/g1.jpg"},
    {id:2, nombre: "p2", precio: 20, img: "../public/Images/g2.jpg"},
    {id:3, nombre: "p3", precio: 30, img: "../public/Images/g3.jpg"},
    {id:4, nombre: "p3", precio: 40, img: "../public/Images/g3.jpg"}

]

export const getProductos = () => {
    return new Promise ((resolve)=>{
        setTimeout(() => {
            resolve(productos)
        }, 2000);
    })
}

