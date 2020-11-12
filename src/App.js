import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Header from "./componants/Header";
import Home from "./containers/Home";
import Product from "./containers/Product";
import Header from "./componants/Header";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route path="/product/:id">
            <Product />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
