import React, { useEffect, useState } from "react";
import { getProductById } from "../asyncmock";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const params = useParams();
  console.log(params)

  useEffect(() => {
      getProductById(params.productId).then((res) => {
        setProducto(res);
      });
    }, []);

  return (
    <div>
      <ItemDetail {...producto} />
    </div>
  );
};

export default ItemDetailContainer;
