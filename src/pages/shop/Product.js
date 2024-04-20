import React from "react";

const Product = (props) => {
  const [id, productName, productPrice, productImage] = props.data;
  return (
    <div>
      <img alt="pic" src={productImage} />
      <h5> {productName}</h5>
      <p>price : {productPrice}$</p>
      <button>+</button>
      <span className="mx-1">0</span>
      <button>-</button>
    </div>
  );
};

export default Product;
