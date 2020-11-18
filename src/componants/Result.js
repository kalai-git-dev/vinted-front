import React from "react";
import { useHistory } from "react-router-dom";

const Result = ({ name, total }) => {
  const history = useHistory();
  return (
    <div className="result">
      <h3>Paiement effectué avec succès !</h3>
      <div className="details-payement">
        <p className="detail-p1">Detail de la commande :</p>
        <p className="detail-p2">Nom du produit : {name}</p>
        <p className="detail-p2">Total payè : {total}</p>
      </div>
      <h2>MERCI POUR VOTRE ACHAT</h2>
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
