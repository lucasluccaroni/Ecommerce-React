import { useState, createContext, useContext } from "react"

//CREACION DE CONTEXT
export const CartContext = createContext({
    cart: [],
    addItem: () => {},
    isInCart: () => {}
})


export const CartProvider = ({children}) =>{
    
    const [cart, setCart] = useState([])
    console.log(cart)

    const addItem = (productToAdd) => {

        if(!isInCart(productToAdd.id)) {
        setCart(prev => [...prev , productToAdd])
        }else(
        console.error("el producto ya esta agregado")
        )
    }

    const isInCart = (productId) => {
        return cart.some((prod) => prod.id === productId)
    }

    const removeItem = (productId) =>{
        const cartUpdaed = cart.filter(prod => prod.id !== productId)
        setCart(cartUpdaed)
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
    }



    return(
        <CartContext.Provider value={{cart, addItem, isInCart, removeItem, clearCart, totalQuantity, total}}>
            {children}
        </CartContext.Provider>
    )
}


export const useCart = () =>{
    return useContext(CartContext)
}