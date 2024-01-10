import { useEffect, useState } from "react"
import estilos from "./Navbar.module.css"
import CartWidget from "../CartWidget/CartWidget"
import { Link, useNavigate } from "react-router-dom"
import logo from "../../../public/images/computer.png"
import { db } from "../../services/firebase/firebaseConfig"
import { getDocs, collection, query, orderBy } from "firebase/firestore"

const Navbar = () =>{
    const [categories, setCategories] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        const categoriesCollection = query(collection(db, "categories"), orderBy("order"))

        getDocs(categoriesCollection)
            .then(querySnapshot =>{
                const categoriesAdapted = querySnapshot.docs.map(doc =>{
                    const fields = doc.data()
                    return {id: doc.id, ...fields}
                })
                setCategories(categoriesAdapted)
            })
    }, [])

    return(
        <nav className={estilos.navbar} >
            <section className={estilos.logo}>
                <Link to="/"> <img src={logo}/>  </Link>
                <Link to="/" className={estilos.title} >Retro-Store</Link>
            </section>
            <section className={estilos.links}>
                {
                    categories.map(cat =>{
                        return <Link key={cat.id}  to={`/category/${cat.slug}`} className={estilos.botones} > {cat.name} </Link>
                    })
                }
                {/* <Link to={"/category/sistemas-operativos"} className={estilos.botones} > Sistemas Operativos </Link>
                <Link to= {"/category/programs"} className={estilos.botones} > Programas</Link>
                <Link to={"/category/cd"} className={estilos.botones} > CD's </Link> */}
                <CartWidget />
            </section>
        </nav>
    )
}

export default Navbar