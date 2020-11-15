import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";

const Login = ({ setUser }) => {
  const History = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (email && password) {
        const response = await axios.post(
          "https://lereacteur-vinted-api.herokuapp.com/user/login",
          {
            email: email,
            password: password,
          }
        );
        //   console.log(response.data);
        if (response.data.token) {
          setUser(response.data.token);

          History.push("/");
        } else {
          alert("Une erreur user");
        }
      } else {
        alert("missing parameter");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="signup">
      <h1>Se connecter</h1>
      <form onSubmit={handleSubmit}>
        <div className="inputs">
          <input
            type="email"
            placeholder="Adresse email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />

          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>
        <div className="inscrire">
          <input type="submit" value="Se connecter" />
          <Link to="/signup">pas encore de compte? inscrit-toi!</Link>
        </div>
      </form>
    </div>
  );
};
export default Login;
