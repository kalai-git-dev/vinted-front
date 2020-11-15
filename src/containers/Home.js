import React, { useState, useEffect } from "react";
import axios from "axios";
import home from "../assets/home.jpeg";
import loading from "../assets/3.gif";
import Section from "../componants/Section";

function Home({ products, setProducts }) {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
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
    fetchData();
  }, []);

  // const filtersProducts = products.filter((item) => {
  //   return item.product_name.toLowerCase().includes(search.toLowerCase());
  // });
  return isLoading ? (
    <div>
      <div>
        <img className="home-img" src={home} alt="home" />
        <div className="card">
          <h2>Prets à faire du tri dans vos placards?</h2>
          <button>commencer à vendre</button>
        </div>
      </div>
      <div className="container">
        <div className="product ">
          {products.map((product) => {
            // console.log(product);
            return <Section key={product._id} product={product} />;
          })}
        </div>
      </div>
    </div>
  ) : (
    <img className="loading" src={loading} alt="loading" />
  );
}

export default Home;
