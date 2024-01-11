import { getDocs, collection, query, where } from "firebase/firestore"
import { db } from "../firebaseConfig"

export const getProducts = (categoryId) =>{


    const collectionRef = categoryId
        ? query(collection(db, "products"), where("category", "==", categoryId))
        : collection(db, "products")

    return getDocs(collectionRef)
        .then(querySnapshot =>{
            const productsAdapted = querySnapshot.docs.map(doc => {
                const fields = doc.data()   
                return {id: doc.id, ...fields } 
            })
            return productsAdapted
            
        })
        .catch(() => {
            return "Hubo un error"
        })
}