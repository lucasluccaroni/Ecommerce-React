import estilos from "./Item.module.css"
import {Link} from "react-router-dom"

const Item = ({id, name, price, img}) =>{
    return(
        <div className={estilos.card} >
            <h3> {name} </h3>
            <img src={img} className={estilos.image} />
            <h4> ${price} </h4>
            <Link to={`/detail/${id}`} className={estilos.botones} > Ver detalle </Link>
        </div>
    )
}

export default Item