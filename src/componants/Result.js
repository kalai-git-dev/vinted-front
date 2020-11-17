import React from "react";
import { useHistory } from "react-router-dom";

const Result = () => {
  const history = useHistory();
  return (
    <div className="result">
      <h3>Paiement effectué avec succès !</h3>
      <button
        onClick={() => {
          history.replace("/");
        }}
      >
        Revenir à l'accueil
      </button>
    </div>
  );
};

export default Result;
