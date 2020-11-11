import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Header from "./componants/Header";
import Home from "./containers/Home";
import Product from "./containers/Product";

function App() {
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
      <Router>
        <Switch>
          <Route path="/product/:id">
            <Product products={products} />
          </Route>
          <Route path="/">
            <Home products={products} />
          </Route>
        </Switch>
      </Router>
    </div>
  ) : (
    <span>en cours de chargements</span>
  );
}

export default App;
