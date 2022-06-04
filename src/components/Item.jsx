import React from "react";
// max-w-[50%]
const Item = ({ name, img }) => {
  return (
    <li className="bg-gray-200 sm:p-5 sm:m-5 my-3 p-3 rounded-md ">

        <h2 className="text-center font-bold text-3xl">{name}</h2>
        <img src={img} alt={name} className="border max-w-xs p-5"/>
        <button className="bg-indigo-600 hover:bg-indigo-700 transition-colors text-white font-bold text-lg p-2 rounded-md">
          Ver detalle
        </button>


    </li>
  );
};

export default Item;
