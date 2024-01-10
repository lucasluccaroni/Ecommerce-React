import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import estilos from "./ItemListContainer.module.css"
import { useNotification } from "../../notification/NotificationService"
import { getDocs, collection, query, where } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"

const ItemListContainer = ({greeting}) =>{
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {showNotification} = useNotification()

    const {categoryId} = useParams()

    const check = (a) =>{
        setTimeout(()=>{
            if(a.length == 0){
                showNotification("info", "No hay productos en esta categoria.")
            }    
        }, 2000)
    }


    useEffect(() =>{
        setLoading(true)

        const collectionRef = categoryId
            ? query(collection(db, "products"), where("category", "==", categoryId))
            : collection(db, "products")

        getDocs(collectionRef)
            .then(querySnapshot =>{
                const productsAdapted = querySnapshot.docs.map(doc => {
                    const fields = doc.data()   
                    return {id: doc.id, ...fields } 
                })
                setProducts(productsAdapted)
                check(productsAdapted)
            })
            .catch(error => {
                console.log(error);
                showNotification("error", "Hubo un error, intente mas tarde.")
            })
            .finally(() =>{
                setLoading(false)
            })
    }, [categoryId] )


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