import { useState } from "react"
import { useCart } from "../../context/CartContext"
import CheckoutForm from "../CheckoutForm/CheckoutForm"
import { Timestamp, addDoc, collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"
import { useNotification } from "../../notification/NotificationService"
import { Link } from "react-router-dom"
import estilos from "./Checkout.module.css"

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState("")
    const {cart, total, clearCart} = useCart()
    const {showNotification} = useNotification()


    const createOrder = async ({name, phone, email}) =>{
        
        try{
            setLoading(true)

            const objOrder = {
                buyer: {
                    name,
                    phone,
                    email,
                },
                items: cart,
                total,
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
                const stockDb = dataDoc.stock  

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
                const orderAdded = await addDoc(orderRef, objOrder)

                setOrderId(orderAdded.id) 
                clearCart()
            } else {
                showNotification("error", "Hay productos que estan fuera de stock.")
                console.log("Hay productos que estan fuera de stock.")
            }

        } catch(error) {
            console.log(error)
            showNotification("error", "Hubo un error generando la orden")

        } finally {
            setLoading(false)
        }
    }
    


    if(loading){
        return <h1>Se esta generando su orden...</h1>
    }

    if(orderId){
        return (
            <>
                <h1>El id de su orden es:  {orderId} </h1>
                <Link to="/" className={estilos.botones} > Ir al Inicio</Link>
            </>
        )
    }

    return(
        <>
            <h1>Checkout</h1>
            <CheckoutForm onConfirm={createOrder} />
        </>
    )
}

export default Checkout