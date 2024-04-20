import React from "react";
import SimpleSlider from "../Slider";
import { PRODUCTS } from "../../data/products";
import Product from "./product";

const Shop = () => {
  return (
    <section>
      <SimpleSlider />
      <div className="container mx-auto flex w-full h-full mt-20 justify-center items-center">
        {PRODUCTS.map((productData) => (
          <Product key={productData.id} data={productData} />
        ))}
      </div>
    </section>
  );
};

export default Shop;
