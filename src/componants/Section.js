import React from "react";
import { Link } from "react-router-dom";

function Section({ product }) {
  return (
    <div>
      <Link to={"/product/" + product._id} className="link">
        <div key={product._id} className="annonce">
          <div className="owner">
            <img
              className="img-avatar"
              src={product.owner.account.avatar.url}
              alt={product.owner.account.username}
            />

            <p className="p-owner">{product.owner.account.username}</p>
          </div>
          {/* product.product_picture[0].url */}
          {/* {console.log(product.product_pictures[0].url)} */}
          <img
            className="img-product"
            src={product.product_pictures[0].url}
            alt={product.product_pictures[0].asset_id}
          />

          <p className="p-price">{product.product_price} £</p>
          <p>j'arrive pas a extraire la taille</p>
          {/* {console.log(Object.keys(product.product_details[1]))} */}
          {/* // console.log("----------------");
                  // return <p key={index}>{detail[keys[0]]}</p>; */}
          <p>{product.product_name}</p>
        </div>
      </Link>
    </div>
  );
}

export default Section;
