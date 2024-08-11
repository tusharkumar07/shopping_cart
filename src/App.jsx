import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./assets/css/global.css";
import CartList from "./components/feature/Cart/CartList";

import ProductLayout from "./components/feature/Product/component/ProductLayout";

import SingleProduct from "./components/feature/Product/component/SingleProduct";
import About from "./components/pages/About";

import Home from "./components/pages/Home";
import HomeLayout from "./components/pages/PageLayout/HomeLayout";
import { getCart, setCart } from "./services/storage";

function App() {
  const [currCart, setCurrCart] = useState([]);

  useEffect(() => {
    const currCart = getCart();
    const cart = [];
    if (!currCart) return setCart("cart", cart);
    setCurrCart(currCart);
  }, []);

  const handleCartChange = (cart) => {
    setCurrCart(cart);
  };

  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<HomeLayout cart={currCart} />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<ProductLayout />} />
          <Route
            path="products/:productId"
            element={<SingleProduct onCartChange={handleCartChange} />}
          />
          <Route
            path="cart"
            element={<CartList onCartChange={handleCartChange} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
