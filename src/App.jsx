ItemDetailContainer
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import Navbar from "./components/Navbar/Navbar"
import {BrowserRouter, Route, Routes} from "react-router-dom"

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Todos los productos" />} />
          <Route path="/category/:categoryId" element={<ItemListContainer greeting="Productos filtrados por categoria" />} />
          <Route path="/detail/:productId" element={<ItemDetailContainer/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
//sdf asdasdas
export default App
