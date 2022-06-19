import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import CartContext from "../context/CartContext";
import Cont from "./Cont";

const ItemDetail = ({ id, name, price, category, stock, description, img }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);
  const { addItem } = useContext(CartContext);

  const handleAdd = () => {
    addItem({ id, name, price, cant });
    setQuantityAdded(cant);
  };

  const [cant, setCant] = useState(1);
  return (
    <div className="border sm:w-96 sm:mx-auto mx-10 my-5 p-3 shadow-xl rounded-xl bg-white">
      <div className="flex bg-zinc-700 px-3 rounded-lg py-1">
        <h3 className="text-white pb-2 capitalize mt-1 cursor-default">
          Categoría{">"}
        </h3>
        <Link
          to={`../category/${category}`}
          className="text-white hover:underline mt-1"
        >
          {category}
        </Link>
      </div>
      {/*  */}
      <div className="">
        <h1 className="text-3xl font-bold m-3  cursor-default">{name}</h1>
        <img className="w-64 my-0 mx-auto" src={img} alt={name} />
        <p className=" cursor-default">{description}</p>
        <p className="text-xl py-3 cursor-default">
          Precio: $<span className="font-black">{price}</span>
        </p>
        <p className="mb-4 cursor-default">
          Stock: <span>{stock}</span> unidades
        </p>
      </div>
      {/*  */}
      <div className="w-full flex justify-center content-center">
        <Cont cant={cant} setCant={setCant} stock={stock} />
      </div>
      <div>
        {quantityAdded === 0 ? (
          <button
            onClick={handleAdd}
            className="bg-green-500 text-white font-bold p-2 text-xl rounded w-full hover:bg-green-600 transition-colors"
          >
            Agregar al carrito
          </button>
        ) : (
          <Link 
          to="/cart"
          className="bg-green-500 text-white font-bold p-2 text-xl rounded w-full block text-center hover:bg-green-600 transition-colors"
          >Terminar compra</Link>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
