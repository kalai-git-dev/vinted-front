import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useState } from "react";
import "./check.css";

import Result from "./Result";

const CheckoutForm = ({ name, price }) => {
  const elements = useElements();
  const stripe = useStripe();

  const [completed, setCompleted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const cardElement = elements.getElement(CardElement);

    const stripeResponse = await stripe.createToken(cardElement);
    console.log(stripeResponse);
    // console.log(stripeToken);
    //console.log(name, price);
    const stripeToken = stripeResponse.token.id;

    const response = await axios.post(
      "https://lereacteur-vinted-api.herokuapp.com/payment",
      {
        token: stripeToken,
        title: name,
        amount: price,
      }
    );
    console.log(response.data);

    if (response.data.status === "succeeded") {
      setCompleted(true);
    }
  };
  const fraisProtection = 0.4;
  const fraisPort = 0.8;
  const total = (fraisPort + fraisProtection + price).toFixed(2);
  return (
    <>
      {!completed ? (
        <div className="container-form">
          <form onSubmit={handleSubmit}>
            <div className="bloc-1">
              <div className="flex">
                <h2>Rèsumè de la commande</h2>
                <p>{name}</p>
              </div>
              <div className="flex">
                <p>Commande</p>
                <p>{price} £</p>
              </div>
              <div className="flex">
                <p>Frais de protection Acheteurs</p>
                <p>{fraisProtection.toFixed(2)} £</p>
              </div>
              <div className="flex">
                <p>Frais de Port</p>
                <p>{fraisPort.toFixed(2)} £</p>
              </div>
              <hr />
            </div>
            <div className="bloc-2">
              <div className="flex">
                <h2>Total</h2>
                <div>{total} £</div>
              </div>
              <p className="total-p">
                Il ne nous reste qu'une seule ètape pour vous offrir {name}.
                vous allez payer <strong>{total} £</strong> (frais deprotection
                et frais de port inclus)
              </p>
            </div>
            <hr />
            <CardElement className="card-payement" />
            <button className="button-pay" type="submit">
              Payer
            </button>
          </form>
        </div>
      ) : (
        <Result name={name} total={total} />
      )}
    </>
  );
};
export default CheckoutForm;
