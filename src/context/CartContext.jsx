import { useState, createContext, useContext } from "react"
import { useNotification } from "../notification/NotificationService"

//CREACION DE CONTEXT
export const CartContext = createContext({
    cart: [],
    addItem: () => {},
    isInCart: () => {}
})


export const CartProvider = ({children}) =>{
    const {showNotification} = useNotification()

    
    const [cart, setCart] = useState([])
    console.log(cart)

    const addItem = (productToAdd) => {

        if(!isInCart(productToAdd.id)) {
            setCart(prev => [...prev , productToAdd])
        }else(
            showNotification("error","el producto ya esta agregado")
        )
    }

    const isInCart = (productId) => {
        return cart.some((prod) => prod.id === productId)
    }

    const removeItem = (productId) =>{
        const cartUpdaed = cart.filter(prod => prod.id !== productId)
        setCart(cartUpdaed)
        showNotification("error", "Producto eliminado")
    }

    // CANTIDAD TOTAL DE LA COMPRA CARRITO
    const getTotalQuantity = () =>{
        let acc = 0
        cart.forEach(prod => {
            acc += prod.quantity
        })
        return acc
    }
    const totalQuantity = getTotalQuantity()



    // PRECIO TOTAL DE LA COMPRA CARRITO
    const getTotal = () =>{
        let acc = 0
        cart.forEach(prod => {
            acc += prod.quantity * prod.price
        })
        return acc
    }
    const total = getTotal()


    //LIMPIAR CARRITO
    const clearCart = () =>{
        setCart([])
        showNotification("info", "El carrito ha sido limpiado con exito.")
    }



    return(
        <CartContext.Provider value={{cart, addItem, isInCart, removeItem, clearCart, totalQuantity, total}}>
            {children}
        </CartContext.Provider>
    )
}


//Custom hook para compartir la notificacion
export const useCart = () =>{
    return useContext(CartContext)
}