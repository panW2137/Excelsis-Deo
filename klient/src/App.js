import Baner from "./baner/baner.jsx";
import Navbar from "./navbar/navbar.jsx";
import Shop from "./shop/shop.jsx";
import Product from "./product/product.jsx";
import Basket from "./basket/basket.jsx";
import LoginForm from "./login form/loginForm.jsx";
import RegisterFrom from "./register form/registerForm.jsx";

import { Routes, Route } from "react-router-dom"

function App() {
  return(
    <>
    <Baner />
    <Navbar />
    <Routes>
      <Route path="/sklep" element={<Shop />} />
      <Route path="/produkt" element={<Product />} />
      <Route path="/koszyk" element={<Basket />}/>
      <Route path="logowanie" element={<LoginForm />} />
      <Route path="/rejestracja" element={<RegisterFrom />} />
    </Routes>
    </>
  )
}
export default App;
