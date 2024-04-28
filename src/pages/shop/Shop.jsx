import React from "react";
import SimpleSlider from "../Slider";
import { PRODUCTS } from "../../data/products";
import Product from "./Product";

const Shop = () => {
  return (
    <section>
      <SimpleSlider />
      <div className="flex gap-4 w-full h-full justify-center p-4 slg:flex-wrap slg:mt-6">
        {PRODUCTS.map((productData) => (
          <Product key={productData.id} data={productData} />
        ))}
      </div>
    </section>
  );
};

export default Shop;
