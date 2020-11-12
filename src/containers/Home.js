import React, { useState, useEffect } from "react";
import axios from "axios";
import home from "../assets/home.jpeg";
import loading from "../assets/3.gif";
import { Link } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://lereacteur-vinted-api.herokuapp.com/offers"
      );
      // console.log(response.data);
      setProducts(response.data.offers);
      setIsLoading(true);
    } catch (error) {
      alert(error.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return isLoading ? (
    <div>
      <div>
        <img className="home-img" src={home} alt="home" />
        <div className="card">
          <h2>Prets a faire du tri dans vos placards?</h2>
          <button>commencer à vendre</button>
        </div>
      </div>
      <div className="container">
        <div className="product ">
          {products.map((product, index) => {
            // console.log(product);
            return (
              <Link to={"/product/" + product._id} className="link">
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
                  <p>j'arrive pas a extraire la taille</p>
                  {/* {console.log(Object.keys(product.product_details[1]))} */}
                  {/* // console.log("----------------");
                  // return <p key={index}>{detail[keys[0]]}</p>; */}
                  <p>{product.product_name}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  ) : (
    <img className="loading" src={loading} alt="loading" />
  );
}

export default Home;
