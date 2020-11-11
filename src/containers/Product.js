import React from "react";
import Header from "../componants/Header";
import { useParams } from "react-router-dom";

function Product() {
  const { id } = useParams();

  return (
    <div>
      <Header />
      product
    </div>
  );
}

export default Product;
