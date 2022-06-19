import React from "react";
import { useContext } from "react";
import {Link} from "react-router-dom"
// import { Context } from "../App";

const Item = ({ name, img, price, id}) => {

// const context = useContext(Context);
// console.log(context)

const mostrarDetalles = () =>{
  console.log("xd")
}

  return (
    <li className="sm:max-w-sm sm:min-w-xs w-full m-3 p-3 rounded-md border shadow-xl bg-white">

      <div className="flex-col justify-center">
      <img src={img} alt={name} className="w-48 my-0 mx-auto"/>
      <h2 className=" text-xl pt-2 pb-2">{name}</h2>
      <h3 className="text-2xl font-bold pb-4">${price}</h3>
      </div>


      <div className="flex justify-between">

        <Link to={`/detail/${id}`} className="border bg-cyan-600 hover:bg-cyan-700 transition-colors font-bold text-white text-lg p-2 rounded-md w-full text-center">Ver detalles</Link>
        {/* <button className="bg-green-600 hover:bg-green-700 transition-colors text-white font-bold text-lg p-2 rounded-md">
          Agregar
        </button> */}
      </div>
    </li>
  );
};

export default Item;
