import { useCart } from "../../context/CartContext"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"
import CartList from "../CartList/CartList"

const CartView = () => {
    const {cart, totalQuantity, total, clearCart} = useCart()

    if(totalQuantity === 0){
        return(
            <div>
                <h1>No hay items en el carrito</h1>
                <Link to={"/"}> Productos</Link>
            </div>
        )
    }

    return(
        <div>
            <h1>CARRITO</h1>
            <CartList cart={cart} />
            <h3>Total: {total} </h3>
            <button onClick={clearCart} > Limpiar Carrito</button>
            <Link to="/checkout"> Checkout </Link>
        </div>
    )
}

export default CartView