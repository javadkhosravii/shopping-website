import React, { useContext } from "react";
import { shopContext } from "../../context/shopContext";
import { PRODUCTS } from "../../data/products";
import Product from "../shop/product";


const Cart = () => {
  const { cartItems, resetCart } = useContext(shopContext);
  return (
    <React.Fragment>
      <h1>Your cart items</h1>
      <div className="row">
        {PRODUCTS.map((p) => {
          if (cartItems?.some((i) => i.id === p.id && i.count > 0))
            return <Product data={p}></Product>;
          return null; // Add this line
        })}
      </div>
      <button className="btn btn-warning m-3" onClick={resetCart}>
        reset
      </button>
    </React.Fragment>
  );
};
export default Cart;
