import { useContext } from "react";
import { shopContext } from "../../context/shopContext";

const Product = (props) => {
  const { id, productName, productImage, price } = props.data;
  const { cartItems, addToCart, removeFromCart } = useContext(shopContext);

  const isInCart = cartItems?.some((item) => item.id === id);
  return (
    <div className="border rounded-md w-64 h-64 m-4 p-2">
      <img alt="pic" src={productImage} className="w-50" />
      <h5 className="text-center font-bold"> {productName}</h5>
      <p>price : {price}€</p>
      <button className="btn btn-info btn-sm" onClick={() => addToCart(id)}>
        +
      </button>
      <span className="">
        {cartItems?.filter((row) => row.id === id)[0]?.count}
      </span>
      {isInCart && (
        <button
          className="btn btn-info btn-sm"
          onClick={() => removeFromCart(id)}
        >
          -
        </button>
      )}
    </div>
  );
};
export default Product;
