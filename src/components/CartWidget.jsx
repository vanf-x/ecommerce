import React from "react";
import { useContext } from "react";
import CartContext from "../context/CartContext";

const CartWidget = () => {

  const { getCartQuantity } = useContext(CartContext);
  const totalQuantity = getCartQuantity();
  return (
    <div>
      <i className="material-icons cursor-pointer text-3xl mr-3 text-zinc-400">
        shopping_cart
      </i>
      {totalQuantity}
    </div>
  );
};

export default CartWidget;
