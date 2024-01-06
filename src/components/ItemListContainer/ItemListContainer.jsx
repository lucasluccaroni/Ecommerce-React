import { useEffect, useState } from "react"
import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import estilos from "./ItemListContainer.module.css"

const ItemListContainer = ({greeting}) =>{
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams()

    const check = (a) =>{
        setTimeout(()=>{
            if(a.length == 0){
                console.log(products);
                return alert("No hay productos en esta categoria.")
            }    
        }, 2000)
    }


    useEffect(() =>{
        setLoading(true)
        const ascynFunction = categoryId ? getProductsByCategory : getProducts
        ascynFunction(categoryId)
        .then(response =>{
            setProducts(response)
            check(response)
        })
        .catch(error => {
            console.log(error);
        })
        .finally(() =>{
            setLoading(false)
        })
    },[categoryId])


    if(loading){
        return <h1 className={estilos.loading} >Cargando...</h1>
    }

    return(
        <div>
            <h1> {greeting} </h1>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer