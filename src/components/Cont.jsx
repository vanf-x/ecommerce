import React, { useState } from "react";
import MensajeError from "./MensajeError";
const Cont = ({ cant, setCant, stock }) => {
  const aumentar = () => {
    if (cant < stock) setCant((cant += 1));
  };

  const disminuir = () => {
    if (cant > 0) {
      setCant((cant -= 1));
    }
  };
  return (
    <div className="flex m-3 p-2">
      <button className="border text-xl font-bold w-8 text-center bg-zinc-200 hover:bg-zinc-400 transition-colors" onClick={disminuir}>
        {" "}
        -{" "}
      </button>
      <h2 className="border p-1 text-xl text-center cursor-default w-16">{cant}</h2>
      <button className="border text-xl font-bold w-8 text-center bg-zinc-200 hover:bg-zinc-400 transition-colors" onClick={aumentar}>
        {" "}
        +{" "}
      </button>
    </div>
  );
};

export default Cont;
