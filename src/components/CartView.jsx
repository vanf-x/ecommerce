
const CartView = () => {

  return (
    <div className=' m-5 p-5 bg-zinc-400'>
      <h1 className="text-center font-black text-5xl">Artículos</h1>
      <div>

      </div>
      <div>
        <h3 className="text-2xl">Precio total: $ <span></span></h3>
        <button className=" my-2 text-2xl text-red-700 p-2 bg-transparent border-2 border-red-700 rounded-lg hover:text-white hover:bg-red-800 hover:border-0 transition-colors block w-full">Vaciar</button>
        <button className="my-2 text-2xl text-white p-2 bg-green-700 rounded-lg hover:bg-green-800 transition-colors block w-full">Finalizar compra</button>
      </div>
    </div>
  )
}

export default CartView
