import React, { useState, useEffect } from "react";
import { getProducts, getProductByCategory } from "../asyncmock";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../services/firebase";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();
  console.log(categoryId);

  useEffect(() => {
    setLoading(true);
    const collectionRef = categoryId
      ? query(collection(db, "products"), where("category", "==", categoryId))
      : collection(db, "products");

    getDocs(collectionRef)
      .then((response) => {
        const productsFormatted = response.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setProducts(productsFormatted);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
    // });
    // if (!categoryId) {
    //   getProducts().then((res) => {
    //     setProducts(res);
    //   }).catch(e=>{
    //     console.log(e)
    //   }).finally(()=>{
    //     setLoading(false);
    //   })
    // } else {
    //   getProductByCategory(categoryId)
    //     .then((res) => {
    //       setProducts(res);
    //     })
    //     .catch((e) => {
    //       console.log(e);
    //     }).finally(()=>{
    //       setLoading(false);
    //     })
    // }
  }, [categoryId]);

  if (loading) {
    return (
      <h2 className="text-3xl font-black text-center mt-10">Cargando...</h2>
    );
  }
  return (
    <div className="max-w-screen-lg my-0 mx-auto">
      {products.length > 0 ? (
        <ItemList products={products} />
      ) : (
        <h2>No hay productos</h2>
      )}
    </div>
  );
};

export default ItemListContainer;
