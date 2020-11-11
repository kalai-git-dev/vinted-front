import React from "react";
import Logo from "../assets/vinted.png";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="col-1">
          <img className="logo" src={Logo} alt="" />
          <div className="search">
            <i class="fas fa-search"></i>
            <input type="text" />
          </div>
        </div>
        <div className="col-2">
          <nav className="navigation">
            <span>S'inscrire</span>
            <span>Se connecter</span>
          </nav>
          <button>Vends tes articles</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
