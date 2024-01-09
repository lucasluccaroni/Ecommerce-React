import { useEffect, useState } from "react"
import { getProductById} from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import estilos from "./ItemDetailContainer.module.css"
import { useNotification } from "../../notification/NotificationService"

const ItemDetailContainer = () =>{
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const {productId} = useParams()
    const {showNotification} = useNotification()

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
            showNotification("error", "Hubo un error cargando el producto, intente nuevamente.")
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