import { useEffect, useState } from "react"
import { getProductById} from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import estilos from "./ItemDetailContainer.module.css"

const ItemDetailContainer = () =>{
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const {productId} = useParams()

    useEffect(()=>{
        document.title = "Retro-Store: Detalle"
    },[])


    useEffect(() =>{
        setLoading(true)
        getProductById(productId)
        .then(response =>{
            setProduct(response)
        })
        .catch(error => {
            console.log(error);
        })
        .finally(() =>{
            setLoading(false)
        })
    },[productId])


    if(loading){
        return <h1 className={estilos.loading} >Cargando...</h1>
    }

    return(
        <div className={estilos.cardContainer} >
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer