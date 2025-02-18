import { Children, createContext, useState } from "react";


export const CarritoContext = createContext({
    carrito: [],
    total: 0,
    cantidadTotal: 0
});

export const CarritoProvider = ({children}) => {

    const [carrito, setCarrito] = useState([])
    const [total, setTotal] = useState([])
    const [cantidadTotal, setCantidadTotal] = useState([])

    /* console.log(carrito) */

    const agregarAlCarrito = (item, cantidad) => {
        const productoExistente = carrito.find(prod => prod.item.id === item.id)

        if (!productoExistente) {
            setCarrito(prev => [...prev, { item, cantidad }])
            setCantidadTotal(prev => prev + cantidad)
            setTotal(prev => prev + (item.precio * cantidad))
        } else {
            const carritoActualizado = carrito.map(prod => {
                if (prod.item.id == item.id) {
                    return { ...prod, cantidad: prod.cantidad + cantidad }
                } else {
                    return prod
                }
            })
            setCarrito(carritoActualizado)
            setCantidadTotal(prev => prev + cantidad)
            setTotal(prev => prev + (item.precio * cantidad))
        }
    }

    const vaciarCarrito = () => {
        setCarrito([])
        setCantidadTotal(0)
        setTotal(0)
    }

    const eliminarProducto = (id) => {
        const productoEliminado = carrito.find(prod => prod.item.id === id)
        const carritoActualizado = carrito.filter(prod => prod.item.id !== id)

        setCarrito(carritoActualizado)
        setCantidadTotal(prev => prev - productoEliminado)
        setTotal(prev => prev - (productoEliminado.item.precio * productoEliminado.cantidad))
    }

    return(
        <>
            <CarritoContext.Provider value={{carrito, total, cantidadTotal, agregarAlCarrito, eliminarProducto, vaciarCarrito}}>
                {children}
            </CarritoContext.Provider>
        </>
    )

}

