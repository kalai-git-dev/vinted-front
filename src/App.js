import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Header from "./componants/Header";
import Cookie from "js-cookie";
import Home from "./containers/Home";
import Product from "./containers/Product";
import Header from "./componants/Header";
import Signup from "./containers/Signup";
import Login from "./containers/Login";
import FiltersProducts from "./containers/FiltersProducts";

function App() {
  const [products, setProducts] = useState([]);

  const [token, setToken] = useState(Cookie.get("token") || null);
  const [search, setSearch] = useState("");

  const setUser = (token2) => {
    if (token2) {
      Cookie.set("token", token2);
      setToken(token2);
    } else {
      Cookie.remove("token");

      setToken(null);
    }
  };

  const filtersProducts = products.filter((item) => {
    return item.product_name.toLowerCase().includes(search.toLowerCase());
  });
  return (
    <div>
      <Router>
        <Header
          token={token}
          setUser={setUser}
          search={search}
          setSearch={setSearch}
        />
        <Switch>
          <Route path="/product/:id">
            <Product />
          </Route>
          <Route path="/signup">
            <Signup setUser={setUser} />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/filters">
            <FiltersProducts
              products={products}
              filtersProducts={filtersProducts}
            />
          </Route>
          <Route path="/">
            <Home
              search={search}
              products={products}
              setProducts={setProducts}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
