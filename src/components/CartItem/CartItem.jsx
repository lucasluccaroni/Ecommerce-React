import { useCart } from "../../context/CartContext"
import estilos from "./CartItem.module.css"


const CartItem = ({name, price, quantity, id}) =>{
    const {removeItem} = useCart()
    

    return(
        <div className={estilos.contenedor} >
            <h2> Nombre: {name} </h2>
            <h2> ${price}  </h2>
            <h2> Cantidad: {quantity} </h2>
            <h2>Subtotal: {quantity*price} </h2>
            <button onClick={() => removeItem(id) }  className={estilos.button} > X </button>
        </div>
    )
}

export default CartItem