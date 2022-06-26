import React from "react";
import { useContext } from "react";
import CartContext from "../context/CartContext";
import { Link, useLocation, NavLink } from "react-router-dom";

const CartWidget = () => {

  const { getCartQuantity } = useContext(CartContext);
  const totalQuantity = getCartQuantity();
  return (
    <div className="flex rounded-lg py-1 px-4 bg-zinc-700">
      <Link to="/cartView">
      <i className="material-icons cursor-pointer text-3xl mr-3 text-zinc-400">
        shopping_cart
      </i>
      </Link>
      <h2 className="text-zinc-400 mt-1 text-xl">
      {totalQuantity}
      </h2>
    </div>
  );
};

export default CartWidget;
