import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Shop from './pages/shop/Shop';
import Cart from './pages/cart/Cart';
import Nav from './components/Nav';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  return (
    <div>
      <Router>
        <Nav/>
        <Routes>
          <Route path="/" element={<Shop/>} />
          <Route path="/about" element={<Cart/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
