import CartItem from "../CartItem/CartItem"
import estilos from "./CartList.module.css"

const CartList = ({cart}) =>{

    return(
        <div className={estilos.contenedor} >
            <div className={estilos.cartList} >
                {
                    cart.map(prod => {
                        return <CartItem key={prod.id} {...prod} />
                    })
                }
            </div>
        </div>

    )
}

export default CartList