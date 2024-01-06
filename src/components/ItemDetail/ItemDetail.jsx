import ItemCount from "../ItemCount/ItemCount"
import estilos from "./ItemDetail.module.css"
import { useState } from "react"

const ItemDetail = ({id, name, category, img, price, description, stock}) =>{
    const [quantity, setQuantity] = useState(0)

    const handleOnAdd = (count) => {
        const objProductToAdd = {id, name, price, count}
        console.log(objProductToAdd)
        console.log(`agregue al carrito: ${count}`)
        setQuantity(count)
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
                quantity === 0 ? (
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