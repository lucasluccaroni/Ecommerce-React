import { useState } from "react"
import estilos from "./ItemCount.module.css"


const ItemCount = ({initialValue = 1, stock, onAdd}) =>{
    const [count, setCount] = useState(initialValue)

    const increment = () =>{
        if(count < stock){
            setCount(prev => prev + 1)
        }
    }

    const decrement = () =>{
        if(count > 1){
            setCount(prev => prev - 1)
        }
    }


    return(
        <div className={estilos.contadorContainer} >
            <h2 className={estilos.count}> {count} </h2>
            <button onClick={decrement}  className={estilos.boton} >-</button>
            <button onClick={()=> onAdd(count)} className={estilos.boton} >Agregar al carrito</button>
            <button onClick={increment} className={estilos.boton} >+</button>
        </div>
    )
}

export default ItemCount