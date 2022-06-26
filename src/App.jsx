import { useState, createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartView from "./components/CartView";
import ItemDetailContainer from "./components/ItemDetailContainer";
//BrowserRouter: qué componentes hijos van a tener acceso a la barra e historial de navegación
//Route:
//Routes: todas las rutas que va a tener la aplicación
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <div className="App bg-zinc-300">
      <CartProvider>
        {/* 
      <ItemListContainer /> */}
        <BrowserRouter>
          {/* Trabaja con la URL como estado (useState) */}
          <NavBar />
          {/* El navbar no depende de nada. así que no va dentro de las rutas. Siempre tiene que aparecer */}
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer />}
            />
            <Route
              path="/detail/:productId"
              element={<ItemDetailContainer />}
            />
            <Route path="/cartView" element={<CartView/>}/>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
