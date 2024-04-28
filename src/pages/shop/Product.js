import { useContext } from "react";
import { shopContext } from "../../context/shopContext";

const Product = (props) => {
  const { id, productName, productImage, price } = props.data;
  const { cartItems, addToCart, removeFromCart } = useContext(shopContext);

  const isInCart = cartItems?.some((item) => item.id === id);
  return (
    <div className="border-2 rounded-lg w-64 h-96 mt-4 p-4">
      <div className="text-center flex flex-col gap-4">
        <img
          alt="pic"
          src={productImage}
          className="hover:scale-105 duration-300"
        />
        <h5 className="text-center font-bold"> {productName}</h5>
        <p>price : {price}€</p>
        <div className="flex justify-center items-center gap-1">
          <button className="btn btn-info btn-sm" onClick={() => addToCart(id)}>
            +
          </button>
          <span>{cartItems?.filter((row) => row.id === id)[0]?.count}</span>
          {isInCart && (
            <button
              className="btn btn-info btn-sm"
              onClick={() => removeFromCart(id)}
            >
              -
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default Product;
