import ItemCount from "../ItemCount/ItemCount"
import estilos from "./ItemDetail.module.css"
import { useCart } from "../../context/CartContext"

const ItemDetail = ({id, name, category, img, price, description, stock}) =>{

    const {addItem, isInCart} = useCart();

    const handleOnAdd = (quantity) => {
        const objProductToAdd = {id, name, price, quantity}
        addItem(objProductToAdd)
        console.log(`agregue al carrito: ${quantity}`)
    }


    return(
        <div className={estilos.card} >
            <h1 className={estilos.title} > {name} </h1>
            <p className={estilos.text} > Categoria: {category} </p>
            <img src={img} className={estilos.image}  />
            <h2> ${price} </h2>
            <p className={estilos.text} > Descripción: {description} </p>

        <footer>
            {
                !isInCart(id) ? (
                    <ItemCount onAdd={handleOnAdd} stock={stock}/>
                ) : (
                    <button>Finalizar Compra</button>
                )
            }
        </footer>
        </div>
    )
}

export default ItemDetail