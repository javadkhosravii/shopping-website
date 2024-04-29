import React from "react";
import SimpleSlider from "../Slider";
import { PRODUCTS } from "../../data/products";
import Product from "./Product";

const Shop = () => {
  return (
    <section>
      <SimpleSlider />
      <div className="flex gap-4 justify-center p-4 slg:flex-wrap">
        {PRODUCTS.map((productData) => (
          <Product key={productData.id} data={productData} />
        ))}
      </div>
    </section>
  );
};

export default Shop;
