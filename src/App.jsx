import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import Navbar from "./components/Navbar/Navbar"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import { CartProvider } from "./context/CartContext"
import CartView from "./components/CartView/CartView"
import CartList from "./components/CartList/CartList"
import CartItem from "./components/CartItem/CartItem"



function App() {

  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Navbar/>
          <Routes>
            <Route path="/" element={<ItemListContainer greeting="Todos los productos" />} />
            <Route path="/category/:categoryId" element={<ItemListContainer greeting="Productos filtrados por categoria" />} />
            <Route path="/detail/:productId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartView/>}/>
          </Routes>
          {/* <CartList/>
          <CartItem/> */}
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
