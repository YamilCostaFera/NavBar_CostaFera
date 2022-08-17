import React from "react";
import Button from "../Button/Button";
// import "./card.css";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount";

function CardCategory({ id, title, price, img, stock, porciones }) {
  return (

      <div className='card d-flex container me-4 mb-5'>
          <h3>{title}</h3>
          <img className='container h-60' src={img} alt="Imagen Torta" />
          <p className='mt-1'>Porciones: {porciones} </p>
          <p className='text-success'>Precio: $ {price}</p>
          <Link to={`/detalle/${id}`}>
          <Button
            /* onTouch={() => alert(`Clickeado el item: ${title}`)} */
            text="Ver más"
          ></Button>
        </Link>
          <ItemCount initial={1} stock={stock}/> 
      </div>
  );
}

export default CardCategory;




