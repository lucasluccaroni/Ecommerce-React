import logo from "../../../public/images/shopping-cart.png"
import estilos from "./CartWidget.module.css"

const CartWidget = () =>{
    return(
        <div className={estilos.cart}>
            <img src={logo} className={estilos.image} />
            0
        </div>
    )
}

export default CartWidget