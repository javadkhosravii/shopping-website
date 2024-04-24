import React, { useContext } from "react";
import { shopContext } from "../../context/shopContext";
import { PRODUCTS } from "../../data/products";
import Product from "../shop/product";

const Cart = () => {
  const { cartItems, resetCart } = useContext(shopContext);

  return (
    <React.Fragment>
      <div className="w-full h-full justify-center items-center">
        <h1 className="text-center m-3 font-normal text-4xl text-red-500">
          Your selected items
        </h1>
        <div className="container mx-auto flex">
          {PRODUCTS.map((p) => {
            if (cartItems?.some((i) => i.id === p.id && i.count > 0))
              return <Product data={p}></Product>;
            return null; // Add this line
          })}
        </div>
        <div className="w-full h-full flex items-center justify-center">
          {" "}
          <button className="btn btn-error m-3 " onClick={resetCart}>
            <p className="text-xl font-normal">Reset items</p>
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Cart;
