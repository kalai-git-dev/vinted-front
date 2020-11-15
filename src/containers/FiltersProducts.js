import React from "react";
import Section from "../componants/Section";

function FiltersProducts({ filtersProducts }) {
  return (
    <span className="filter">
      {filtersProducts.map((product) => {
        console.log(product);
        return <Section key={product._id} product={product} />;
      })}
    </span>
  );
}

export default FiltersProducts;
