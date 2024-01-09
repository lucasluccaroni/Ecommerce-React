import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import Navbar from "./components/Navbar/Navbar"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import { CartProvider } from "./context/CartContext"
import CartView from "./components/CartView/CartView"
import { NotificationProvider} from "./notification/NotificationService"



function App() {

  return (
    <>
      <NotificationProvider>
        <BrowserRouter> 
          <CartProvider>
            <Navbar/>
            <Routes>
              <Route path="/" element={<ItemListContainer greeting="Todos los productos" />} />
              <Route path="/category/:categoryId" element={<ItemListContainer greeting="Productos filtrados por categoria" />} />
              <Route path="/detail/:productId" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<CartView/>}/>
            </Routes>
          </CartProvider>
        </BrowserRouter>
      </NotificationProvider>
    </>
  )
}

export default App
