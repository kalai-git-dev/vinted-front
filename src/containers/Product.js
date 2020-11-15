import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import loading from "../assets/3.gif";

const Product = () => {
  const { id } = useParams();

  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
      );
      //   console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [id]);
  return isLoading ? (
    <img className="loading" src={loading} alt="loading" />
  ) : (
    <div className="container-product">
      <div className="col-3">
        {data.product_pictures.map((picture, index) => {
          return <img src={picture.url} alt={picture.version_id} />;
        })}
      </div>
      <div className="col-4">
        <div className="bloc-1">
          <p className="price">{data.product_price}£</p>
          {data.product_details.map((detail, index) => {
            const keys = Object.keys(detail);
            console.log(keys);
            return (
              <p className="details" key={index}>
                <p className="span-left">{keys[0]}</p>
                <p className="span-rigth">{detail[keys[0]]}</p>
              </p>
            );
          })}
        </div>
        <hr />
        <div className="bloc-2">
          <h3>{data.product_name}</h3>
          <p>{data.product_description}</p>
          <div className="user">
            <img
              className="img-avatar"
              src={data.owner.account.avatar.url}
              alt={data.owner.account.username}
            />
            <span>{data.owner.account.username}</span>
          </div>
          <button className="button-product">Acheter</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
