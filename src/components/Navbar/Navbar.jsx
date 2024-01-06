import estilos from "./Navbar.module.css"
import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"
import logo from "../../../public/images/computer.png"

const Navbar = () =>{
    return(
        <nav className={estilos.navbar} >
            <section className={estilos.logo}>
                <Link to="/"> <img src={logo}/>  </Link>
                <Link to="/" className={estilos.title} >Retro-Store</Link>
            </section>
            <section className={estilos.links}>
                <Link to={"/category/sistemas-operativos"} className={estilos.botones} > Sistemas Operativos </Link>
                <Link to= {"/category/programs"} className={estilos.botones} > Programas</Link>
                <Link to={"/category/cd"} className={estilos.botones} > CD's </Link>
                <CartWidget />
            </section>
        </nav>
    )
}

export default Navbar