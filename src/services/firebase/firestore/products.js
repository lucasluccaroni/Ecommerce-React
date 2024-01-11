import { getDocs, collection, query, where } from "firebase/firestore"
import { db } from "../firebaseConfig"
import { createProductAdaptedFromFirestore } from "../../../adapters/createProductAdaptedFromFirestore"

export const getProducts = (categoryId) =>{


    const collectionRef = categoryId
        ? query(collection(db, "products"), where("category", "==", categoryId))
        : collection(db, "products")

    return getDocs(collectionRef)
        .then(querySnapshot =>{
            const productsAdapted = querySnapshot.docs.map(doc => {
                return createProductAdaptedFromFirestore(doc)
            })
            return productsAdapted
            
        })
        .catch(() => {
            return "Hubo un error"
        })
}