import React from "react";
import SimpleSlider from "../Slider";
import { PRODUCTS } from "../../data/products";
import Product from "./Product";

const Shop = () => {
  return (
    <section>
      <SimpleSlider />
      <div className="w-full flex justify-center border-2 slg:flex-col-1">
        {PRODUCTS.map((productData) => (
          <Product key={productData.id} data={productData} />
        ))}
      </div>
    </section>
  );
};

export default Shop;
