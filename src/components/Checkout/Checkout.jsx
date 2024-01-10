import { useState } from "react"
import { useCart } from "../../context/CartContext"
import CheckoutForm from "../CheckoutForm/CheckoutForm"
import { Timestamp, addDoc, collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"
import { useNotification } from "../../notification/NotificationService"

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState("")
    const {cart, total, clearCart} = useCart()
    const {showNotification} = useNotification()


    const createOrder = async ({name, phone, email}) =>{
        setLoading(true)

        try{
            const objOrder = {
                buyer: {
                    name, phone, email
                },
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            }


            const batch = writeBatch(db)

            const outOfStock = []

            const ids = cart.map(prod => prod.id)

            const productsRef = collection(db, "products")

            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), "in", ids)))

            const {docs} = productsAddedFromFirestore


            docs.forEach(doc =>{
                const dataDoc = doc.data()
                const stockDb = dataDoc.text

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if(stockDb >= prodQuantity){
                    batch.update(doc.ref, {stock: stockDb - prodQuantity})
                } else {
                    outOfStock.push({id: doc.id, ...dataDoc})
                }
            })


            if(outOfStock.length === 0){
                await batch.commit()

                const orderRef = collection(db, "orders")
                const orderAdded = await addDoc(orderRef, objOrder)  // generamos la orden

                setOrderId(orderAdded.id) //guardamos el ID de la orden en un estado
                clearCart()
            } else {
                console.log("Hay productos que estan fuera de stock")
            }

        } catch(error) {
            console.log(error)
            showNotification("error", error)

        } finally {
            setLoading(false)
        }
    }
    


    if(loading){
        return <h1>Se esta generando su orden...</h1>
    }

    if(orderId){
        return <h1>El id de su ordern es {orderId} </h1>
    }

    return(
        <>
            <h1>Checkout</h1>
            <CheckoutForm onConfirm={createOrder} />
        </>
    )
}

export default Checkout