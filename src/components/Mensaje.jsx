import React from "react";

const Mensaje = ({ mensaje, setStock }) => {
    const reiniciar = () =>{
        setStock(10)
    }
  return (
    <div className="flex-column justify-center align-center">
      <div className="flex bg-red-700 w-screen justify-center p-3 text-white font-bold uppercase">
        {mensaje}
      </div>

      <div className="flex justify-center">
        <button 
        className="text-white text-xl font-bold uppercase mt-10 rounded p-2 bg-orange-400 w-1/2"
        onClick={reiniciar}
        >
          Reiniciar Carrito
        </button>
      </div>
    </div>
  );
};

export default Mensaje;
