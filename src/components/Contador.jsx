import React from 'react'

const Contador = () => {
  
  const incremento = () => {
    if (stock <= cont) {
      return;
    }
    setCont((cont += 1));
  };
  const decremento = () => {
    if (cont === 0) {
      setCont(0);
      return;
    }
    setCont((cont -= 1));
  };

  const argregarAlCarrito = () => {
    setStock(stock - cont);
    setCont(0);
  };
  return (
    <div>
      
    </div>
  )
}

export default Contador
