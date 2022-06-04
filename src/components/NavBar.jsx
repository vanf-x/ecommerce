import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
  const apretar = (e) => {
    console.log(`Apretando ${e.target.outerText}`);
    // console.log(e.target.outerText)
  };

  // ecommerce iniciar sesion registrarse carrito
  // seccion 1, 2, 3, 4
  return (
    <nav className="flex-column justify-center border items-center">
      <div className="flex justify-around items-center">

        <div className="w-2/4 ml-5 text-3xl">
        <h1>Ecommerce</h1>
        </div>

        <div className="flex justify-around w-2/4">
        <button>Iniciar sesión</button>
        <button>Registrarse</button>
        <CartWidget />
        </div>

      </div>
      
      <div className="border bg-gray-700">
        <ul  className="flex justify-end items-center mr-5">
          <li className="mr-5 text-white hover:text-yellow-200 transition-colors cursor-pointer">Ofertas</li>
          <li className="mr-5 text-white hover:text-yellow-200 transition-colors cursor-pointer">Categorías</li>
          <li className="mr-5 text-white hover:text-yellow-200 transition-colors cursor-pointer">Favoritos</li>
          <li className="mr-5 text-white hover:text-yellow-200 transition-colors cursor-pointer">Ayuda</li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
