import logo from "../../../public/images/shopping-cart.png"
import estilos from "./CartWidget.module.css"
import { useCart } from "../../context/CartContext"
import { Link } from "react-router-dom"

const CartWidget = () =>{

    const {totalQuantity} = useCart()

    return(
            <Link to="/cart" className={estilos.cartWidget} >
                <img src={logo} className={estilos.image} />
                {totalQuantity}
            </Link>

    )
}

export default CartWidget