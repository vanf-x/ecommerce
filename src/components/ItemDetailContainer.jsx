import React, { useEffect, useState } from "react";
import { getProductById } from "../asyncmock";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../services/firebase";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(true);
  const { productId } = useParams();

  useEffect(() => {
    // getProductById(params.productId).then((res) => {
    //   setProducto(res);
    // });
    const docRef = doc(db, "products", productId);
    getDoc(docRef)
      .then((doc) => {
        const productFormatted = { id: doc.id, ...doc.data() };
        setProducto(productFormatted);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [productId]);

if(loading){
  return <h1>Cargando...</h1>
}

  return (
    <div className="">
      <ItemDetail {...producto} />
    </div>
  );
};

export default ItemDetailContainer;
