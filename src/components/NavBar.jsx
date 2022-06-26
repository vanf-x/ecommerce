import React from "react";
import CartWidget from "./CartWidget";
// import Logo from "../assets/productos/Logo.png";
import { Link, useLocation, NavLink } from "react-router-dom";
const NavBar = () => {
  const apretar = (e) => {
    console.log(`Apretando ${e.target.outerText}`);
    // console.log(e.target.outerText)
  };
  const location = useLocation();
  const urlActual = location.pathname;

  return (
    <nav className="flex-column justify-center border items-center">
      <ul className="flex justify-end">
        <li className="uppercase mx-1 text-zinc-400 text-xs cursor-pointer  md:text-xl">
          Mi cuenta |
        </li>
        <li className="uppercase mx-1 text-zinc-400 text-xs cursor-pointer  md:text-xl">
          Sobre nosotros |
        </li>
        <li className="uppercase mx-1 text-zinc-400 text-xs cursor-pointer  md:text-xl">
          Favoritos |
        </li>
        <li className="uppercase mx-1 text-zinc-400 text-xs cursor-pointer  md:text-xl">
          Iniciar Sesión
        </li>
      </ul>
      <div className="bg-zinc-900 py-5">
        <div className="flex justify-around items-center">
          <Link to="/">
            <h1 className="text-3xl sm:text-5xl font-bold ml-3 text-white hover:text-blue-400 transition-colors cursor-pointer">
              Lorem Store
            </h1>
          </Link>
          <CartWidget />
        </div>

        <div className="flex flex-col sm:flex sm:flex-row justify-around mt-5">
          <Link
            className={`${
              urlActual === "/category/gimnasio"
                ? "text-blue-300"
                : "text-white"
            } bg-zinc-600 sm:rounded-xl p-1 text-xl sm:text-lg font-bold text-center hover:text-blue-300 transition-colors grow mx-1`}
            to="/category/gimnasio"
          >
            Gimnasio
          </Link>
          <Link
            className={`${
              urlActual === "/category/outdoor" ? "text-blue-300" : "text-white"
            } bg-zinc-600 sm:rounded-xl p-1 text-xl sm:text-lg font-bold text-center hover:text-blue-300 transition-colors grow mx-1`}
            to="/category/outdoor"
          >
            Outdoor
          </Link>
          <Link
            className={`${
              urlActual === "/category/deportes-de-contacto"
                ? "text-blue-300"
                : "text-white"
            } bg-zinc-600 sm:rounded-xl text-xl sm:text-lg p-1 font-bold text-center hover:text-blue-300 transition-colors grow mx-1`}
            to="/category/deportes-de-contacto"
          >
            Deportes de contacto
          </Link>
          <Link
            className={`${
              urlActual === "/category/indumentaria"
                ? "text-blue-300"
                : "text-white"
            } bg-zinc-600 sm:rounded-xl text-xl sm:text-lg p-1 font-bold text-center hover:text-blue-300 transition-colors grow mx-1`}
            to="/category/indumentaria"
          >
            Indumentaria
          </Link>
        </div>
      </div>
      {/* 

*/}
    </nav>
  );
};

export default NavBar;
