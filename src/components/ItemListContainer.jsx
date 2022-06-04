import React, { useState, useEffect } from "react";
import { getProducts } from "../asyncmock";
import ItemList from "./ItemList";

const ItemListContainer = ({}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res);
    });
  }, []);

  return (
    <div className="max-w-screen-lg my-0 mx-auto">
      <h1 className="text-center text-3xl font-bold text-zinc-800 my-5">Elegí entre más de 10 productos diferentes ;)</h1>
      <ItemList products={products}/>
    </div>
  );
};

export default ItemListContainer;
