import { useState } from "react"
import estilos from "./CheckoutForm.module.css"


const CheckoutForm = ({onConfirm}) =>{
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")

    
    const handleConfirm = (e) =>{
        e.preventDefault()

        const userData = {
            name, phone, email
        }
        onConfirm(userData)
    }


    return(
        <div className={estilos.container} >
            <form onSubmit={handleConfirm} className={estilos.formStyle} >
                <label className={estilos.campos} >
                    <h3>Nombre:</h3>
                    <input type="text" value={name} onChange={({target}) => setName(target.value)} />
                </label>
                <label className={estilos.campos} >
                    <h3>Teléfono:</h3>
                    <input type="number" value={phone} onChange={({target}) => setPhone(target.value)} />
                </label>
                <label className={estilos.campos} >
                    <h3>Email:</h3>
                    <input type="email" value={email} onChange={({target}) => setEmail(target.value)}  style={{marginLeft: 20}} />
                </label>
                <div>
                    <button type="submit" className={estilos.botones} > Crear orden </button>
                </div>
            </form>
        </div>
    )
}

export default CheckoutForm