import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./publish.css";

function Publish({ token }) {
  const history = useHistory();

  const [file, setFile] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");
  console.log(file);
  return (
    <div className="container-publish">
      <h1>Vends ton article</h1>
      <form
        onSubmit={async (event) => {
          event.preventDefault();

          const formData = new FormData();
          formData.append("picture", file);
          formData.append("title", title);
          formData.append("description", description);
          formData.append("brand", brand);
          formData.append("size", size);
          formData.append("color", color);
          formData.append("condition", condition);
          formData.append("city", city);
          formData.append("price", price);

          if (
            file &&
            title &&
            description &&
            brand &&
            size &&
            color &&
            condition &&
            city &&
            price
          ) {
            const response = await axios.post(
              " https://lereacteur-vinted-api.herokuapp.com/offer/publish",
              formData,
              {
                headers: {
                  authorization: "Bearer " + token,
                },
              }
            );
            console.log(response.data);
            history.push("/");
          } else {
            alert("missing information");
          }
        }}
      >
        <div className="section-input input-heigth">
          <label className="label-file" htmlFor="file">
            Ajouter une photo
          </label>
          <input
            className="input-file"
            type="file"
            id="file"
            // value="Ajoute une photo"
            onChange={(event) => {
              setFile(event.target.files[0]);
            }}
          />
        </div>
        <div className="section-input">
          <div className="contenu-input">
            <label htmlFor="text">Titre</label>
            <input
              type="text"
              value={title}
              placeholder="EX : Chaussure"
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
          </div>
          <div className="contenu-input">
            <label htmlFor="text">Dècris ton article</label>
            <textarea
              type="text"
              value={description}
              placeholder="Description de l'article"
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="section-input">
          <div className="contenu-input">
            <label htmlFor="text">Marque </label>
            <input
              type="text"
              placeholder="EX : Nike"
              value={brand}
              onChange={(event) => {
                setBrand(event.target.value);
              }}
            />
          </div>
          <div className="contenu-input">
            <label htmlFor="text">Taille</label>
            <input
              type="text"
              placeholder=" EX : 43 ou L/40/12"
              value={size}
              onChange={(event) => {
                setSize(event.target.value);
              }}
            />
          </div>
          <div className="contenu-input">
            <label htmlFor="text">Couleur</label>
            <input
              type="text"
              placeholder=" EX : Rouge"
              value={color}
              onChange={(event) => {
                setColor(event.target.value);
              }}
            />
          </div>
          <div className="contenu-input">
            <label htmlFor="text">Etat</label>
            <input
              type="text"
              placeholder="EX : Neuf"
              value={condition}
              onChange={(event) => {
                setCondition(event.target.value);
              }}
            />
          </div>
          <div className="contenu-input">
            <label htmlFor="text">Lieu</label>
            <input
              type="text"
              placeholder=" EX : Paris"
              value={city}
              onChange={(event) => {
                setCity(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="section-input">
          <div className="contenu-input">
            <label htmlFor="text">Prix</label>
            <div>
              <input
                type="number"
                placeholder="EX : 50$"
                value={price}
                onChange={(event) => {
                  setPrice(event.target.value);
                }}
              />
              <div className="contenu-input">
                <input type="checkbox" />
                <span>Je suis intéressé(e) par les échanges</span>
              </div>
            </div>
          </div>
        </div>
        <div className="button">
          <input type="submit" value="Ajouter" />
        </div>
      </form>
    </div>
  );
}

export default Publish;
