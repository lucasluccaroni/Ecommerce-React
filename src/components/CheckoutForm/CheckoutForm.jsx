import { useState } from "react"


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
        <div>
            <form onSubmit={handleConfirm}>
                <label>
                    Nombre
                    <input type="text" value={name} onChange={({target}) => setName(target.value)} />
                </label>
                <label>
                    Telefono
                    <input type="number" value={phone} onChange={({target}) => setPhone(target.value)} />
                </label>
                <label>
                    Email
                    <input type="email" value={email} onChange={({target}) => setEmail(target.value)} />
                </label>
                <div>
                    <button type="submit"> Crear orden </button>
                </div>
            </form>
        </div>
    )
}

export default CheckoutForm