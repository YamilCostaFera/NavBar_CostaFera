import React from "react";
import "./card.css";

function Card({ title, price, img, porciones }) {
  return (
    <div className="card">
      <div className="card-img">
        <img src={img} alt="imagen" />
      </div>
      <div className="card-detail">
        <h2>{title}</h2>
        <p>Cantidad de porciones: {porciones}</p>
        <h3>$ {price}</h3>
        <Button type text="Ver más"></Button>
      </div>
    </div>
  );
}

export default Card;