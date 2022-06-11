import React from 'react'

const Contador = () => {
  
  const incremento = () => {
    // if (stock <= cont) {
    //   return;
    // }
    setCont((cont += 1));
  };
  const decremento = () => {
    // if (cont === 0) {
    //   setCont(0);
    //   return;
    // }
    setCont((cont -= 1));
  };

  // const argregarAlCarrito = () => {
  //   setStock(stock - cont);
  //   setCont(0);
  // };
  return (
    <div className='flex text-xl'>
      <button className='border px-2 bg-zinc-300' onClick={decremento}>-</button>
      <h2 className='border px-2'>{cont}</h2>
      <button className='border px-2 bg-zinc-300' onClick={incremento}>+</button>
    </div>
  )
}

export default Contador
