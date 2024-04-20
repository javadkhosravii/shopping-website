import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
const Nav = () => {
  return (
    <nav className="flex w-full h-20 bg-blue-500 justify-center items-center">
      <div className="container mx-auto flex justify-between">
        <a href="/" className="font-bold text-2xl text-white">
          javad khosravi
        </a>
        <ul className="flex justify-center items-center">
          <li className="ml-5">
            <Link to="/" className="text-white">
              Shop
            </Link>
          </li>
          <li className="ml-5">
            <Link to="/cart" className="text-white">
              <FontAwesomeIcon icon={faShoppingCart} />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
