import React, { useState, useEffect } from "react";
import { getProducts, getProductByCategory } from "../asyncmock";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();
  console.log(categoryId);

  useEffect(() => {
    if (!categoryId) {
      getProducts().then((res) => {
        setProducts(res);
      }).catch(e=>{
        console.log(e)
      }).finally(()=>{
        setLoading(false);
      })
    } else {
      getProductByCategory(categoryId)
        .then((res) => {
          setProducts(res);
        })
        .catch((e) => {
          console.log(e);
        }).finally(()=>{
          setLoading(false);
        })
    }
  }, [categoryId]);

if(loading){
  return (<h2 className="text-3xl font-black text-center mt-10">Cargando...</h2>)
}
  return (
    <div className="max-w-screen-lg my-0 mx-auto">
      <h1 className="text-center text-3xl font-bold text-zinc-800 my-5"></h1>
      Elegí entre más de 10 productos diferentes ;)
      {products.length > 0 ? (
        <ItemList products={products} />
      ) : (
        <h2>No hay productos</h2>
      )}
    </div>
  );
};

export default ItemListContainer;
