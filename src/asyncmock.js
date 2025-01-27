const productos = [
    {id:1, nombre: "p1", precio: 10},
    {id:2, nombre: "p2", precio: 20},
    {id:3, nombre: "p3", precio: 30}
]

export const getProductos = () => {
    return new Promise ((resolve)=>{
        setTimeout(() => {
            resolve(productos)
        }, 2000);
    })
}

