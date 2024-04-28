import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { shopContext } from "../context/shopContext";
const Nav = () => {
  const { cartItems } = useContext(shopContext);
  const itemCount = cartItems?.reduce((prev, current) => {
    return prev + current.count;
  }, 0);
  return (
    <nav className="flex w-full h-20 bg-blue-500 justify-center items-center">
      <div className="container mx-auto flex justify-between smd:px-4 sxs:px-4">
        <a href="/" className="font-bold text-2xl text-white">
          javad khosravi
        </a>
        <ul className="flex justify-center items-center gap-4">
          <li>
            <Link to="/" className="text-white">
              Shop
            </Link>
          </li>
          <li>
            <Link to="/cart" className="text-white">
              <FontAwesomeIcon icon={faShoppingCart} />
              {itemCount > 0 && (
                <span className="text-white bg-red-500 p-1 rounded-[9px] text-[12px] ml-0 align-top">
                  {itemCount}
                </span>
              )}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
