import React from "react";
import Logo from "../assets/vinted.png";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Header({ token, setUser, search, setSearch }) {
  const History = useHistory();

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };
  return (
    <div className="header">
      <div className="container-header">
        <div className="col-1">
          <Link to="/">
            <img className="logo" src={Logo} alt="" />
          </Link>
          <div className="search">
            <Link to="/filters" className="search-icon">
              <i class="fas fa-search"></i>
            </Link>
            <input
              value={search}
              type="text"
              placeholder="Recherche des articles"
              onChange={handleSearchChange}
            />
          </div>
        </div>
        <div className="col-2">
          <nav className="navigation">
            {token ? (
              <button
                className="button-navigation"
                onClick={() => {
                  setUser(null);
                  History.push("/");
                }}
              >
                Se dèconnecter
              </button>
            ) : (
              <div className="link-navigation">
                <Link to="/signup">S'inscrire</Link>
                <Link to="/login">Se connecter</Link>
              </div>
            )}
          </nav>
          <Link className="button-vente" to="/publish">
            Vends tes articles
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
