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
  console.log(urlActual)
  return (
    <nav className="flex-column justify-center border items-center">
      <ul className="flex justify-end">
        <li className="uppercase mx-1 text-zinc-400 text-sm cursor-pointer">
          Mi cuenta |
        </li>
        <li className="uppercase mx-1 text-zinc-400 text-sm cursor-pointer">
          Sobre nosotros |
        </li>
        <li className="uppercase mx-1 text-zinc-400 text-sm cursor-pointer">
          Favoritos |
        </li>
        <li className="uppercase mx-1 text-zinc-400 text-sm cursor-pointer">
          Iniciar Sesión
        </li>
      </ul>

      <div className="flex justify-between items-center py-5 bg-zinc-900">
        <Link to="/">
          <h1 className="text-3xl ml-3 text-zinc-400 cursor-pointer">
            Ecommerce
          </h1>
        </Link>

        <Link className={`${urlActual === "/category/gimnasio" ? "text-blue-300" : "text-white"} bg-zinc-600 rounded-xl p-1 font-bold`} to="/category/gimnasio">Gimnasio</Link>
        <Link className={`${urlActual === "/category/outdoor" ? "text-blue-300" : "text-white"} bg-zinc-600 rounded-xl p-1 font-bold`} to="/category/outdoor">Outdoor</Link>
        <Link className={`${urlActual === "/category/deportes-de-contacto" ? "text-blue-300" : "text-white"} bg-zinc-600 rounded-xl p-1 font-bold`} to="/category/deportes-de-contacto">Deportes de contacto</Link>
        <Link className={`${urlActual === "/category/indumentaria" ? "text-blue-300" : "text-white"} bg-zinc-600 rounded-xl p-1 font-bold`} to="/category/indumentaria">Indumentaria</Link>
        

        <CartWidget />
      </div>
{/* 

*/}
    </nav>
  );
};

export default NavBar;
