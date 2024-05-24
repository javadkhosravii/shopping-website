import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Shop from "./pages/shop/Shop";
import Cart from "./pages/cart/Cart";
import Nav from "./components/Nav";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ShopContextProvider } from "./context/shopContext";
import Footer from "./components/Footer";
import Blog from "./pages/Blog";
function App() {
  return (
    <div>
      <ShopContextProvider>
        <Router>
          <Nav />
          <Routes>
            <Route path="/blog" element={<Blog />} />
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
