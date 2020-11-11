import React from "react";
import Header from "../componants/Header";
import home from "../assets/home.jpeg";
import { Link } from "react-router-dom";

function Home({ products }) {
  return (
    <div>
      <Header />
      <img className="home-img" src={home} alt="home" />
      <div className="card">
        <h2>Prets a faire du tri dans vos placards?</h2>
        <button>commencer a vendre</button>
      </div>
      <div className="product container">
        {products.map((product, index) => {
          //   console.log(product);
          return (
            <Link to="/product/:id">
              <div key={product._id} className="annonce">
                <div className="owner">
                  <img
                    className="img-avatar"
                    src={product.owner.account.avatar.url}
                    alt={product.owner.account.username}
                  />

                  <p>{product.owner.account.username}</p>
                </div>
                {/* product.product_picture[0].url */}
                {/* {console.log(product.product_pictures[0].url)} */}
                <img
                  className="img-product"
                  src={product.product_pictures[0].url}
                  alt={product.product_pictures[0].asset_id}
                />
                <p>{product.product_price} £</p>
                <p>{product.product_name}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
