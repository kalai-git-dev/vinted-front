import React, { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
// import Header from "./componants/Header";
import Cookie from "js-cookie";
import Home from "./containers/Home";
import Product from "./containers/Product";
import Header from "./componants/Header";
import Signup from "./containers/Signup";
import Login from "./containers/Login";
import FiltersProducts from "./containers/FiltersProducts";
import Publish from "./containers/publish/Publish";
import Payment from "./containers/payement/Payment";

function App() {
  const [products, setProducts] = useState([]);

  const [token, setToken] = useState(Cookie.get("token") || null);
  const [search, setSearch] = useState("");
  console.log(products);

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
            <Login setUser={setUser} />
          </Route>
          <Route path="/filters">
            <FiltersProducts
              products={products}
              filtersProducts={filtersProducts}
            />
          </Route>
          <Route exact path="/publish">
            {!token ? <Redirect to="/login" /> : <Publish token={token} />}
          </Route>
          <Route exact path="/payment">
            {!token ? <Redirect to="/login" /> : <Payment />}
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
