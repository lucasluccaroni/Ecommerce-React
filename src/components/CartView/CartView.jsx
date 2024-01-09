import { useCart } from "../../context/CartContext"
import { Link } from "react-router-dom"
import CartList from "../CartList/CartList"
import estilos from "./CartView.module.css"

const CartView = () => {
    const {cart, totalQuantity, total, clearCart} = useCart()

    if(totalQuantity === 0){
        return(
            <div>
                <h1>No hay items en el carrito.</h1>
                <Link to={"/"} className={estilos.botones} > Productos</Link>
            </div>
        )
    }

    return(
        <div>
            <h1>CARRITO</h1>
            <CartList cart={cart} />
            <div className={estilos.finalDelCarrito} > 
                <button onClick={clearCart} className={estilos.botones} > Limpiar Carrito</button>
                <Link to="/checkout" className={estilos.botones} > Checkout </Link>
                <h1>Total: $ {total} </h1>
            </div>
        </div>
    )
}

export default CartView