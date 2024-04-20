import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SimpleSlider from "../Slider";
import { PRODUCTS } from "../../data/product";


const Shop = () => {
  return (
    <React.Fragment className="flex flex-col container mx-auto m-20">
      <SimpleSlider />
      <div className="mx-auto container flex mt-8 w-full gap-8 h-44">
        {PRODUCTS.map((product) => (
          <div key={product.id}>
            <h2>{product.productName}</h2>
            <img src={product.productImage} alt={product.productName} />
            <p>Price: {product.price}</p>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Shop;
