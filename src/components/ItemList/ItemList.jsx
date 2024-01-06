//COMPONENTE DE PRESENTACION
import { useEffect } from "react"
import Item from "../Item/Item"
import estilos from "./ItemList.module.css"

const ItemList = ({products}) =>{

    return(
        <div className={estilos.contenedor} >
            {
                products.map(prod => {
                    return <Item key={prod.id} {...prod} />
                })
            }
        </div>
    )
}

export default ItemList