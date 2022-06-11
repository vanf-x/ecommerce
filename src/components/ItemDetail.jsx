import React from "react";
import { Link } from "react-router-dom";

const ItemDetail = ({ id, name, price, category, stock, description, img }) => {
  return (
      <div className="border w-96 my-0 mx-auto p-3 shadow-xl rounded-xl">
          <h3 className="text-center text-indigo-600 pb-2 capitalize">Categoría: {category}</h3>
        <h1 className="text-3xl font-bold text-center">{name}</h1>
        <img className="w-64 my-0 mx-auto" src={img} alt={name} />
        <p>{description}</p>
        <p className="text-xl py-3">
          Precio: $<span className="font-black">{price}</span>
        </p>
        <p className="mb-4">
            Stock: <span>{stock}</span> unidades
        </p>
        <Link className="bg-indigo-600 text-white font-bold p-2 text-center rounded-md" to="/">Volver</Link>
      </div>
  );
};

export default ItemDetail;

