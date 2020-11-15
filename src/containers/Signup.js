import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";

function Signup({ setUser }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const History = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (username && email && password) {
        const response = await axios.post(
          "https://lereacteur-vinted-api.herokuapp.com/user/signup",
          { username: username, email: email, password: password }
        );
        // console.log(response.data);
        if (response.data.token) {
          setUser(response.data.token);
        } else {
          alert("erreur user");
        }
        History.push("/");
      } else {
        alert("missing parameter");
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div className="signup">
      <h1>S'inscrire</h1>
      <form onSubmit={handleSubmit}>
        <div className="inputs">
          <input
            value={username}
            type="text"
            placeholder="Nom d'utilisateur"
            onChange={(event) => setUsername(event.target.value)}
          />
          <input
            value={email}
            type="email"
            placeholder="Email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <input
            value={password}
            type="password"
            placeholder="mot de passe"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>
        <div className="input-checkbox">
          <input type="checkbox" />
          <label htmlFor="text">S'inscrire à notre newsletter</label>
        </div>
        <p>
          En m'inscrivant je confirme avoir lu et accepté les Termes &
          Conditions et Politique de Confidentialité de Vinted. Je confirme
          avoir au moins 18 ans.
        </p>

        <div className="inscrire">
          <input type="submit" value="S'inscrire" />
          <Link to="/login">Tu as deja un compte? connecte-toi</Link>
        </div>
      </form>
    </div>
  );
}

export default Signup;
