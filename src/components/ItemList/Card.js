import React from "react";
import Button from "../Button/Button";
import "./Card.css";
import { Link } from "react-router-dom";


function Card({ id, title, price, img, stock, porciones }) {


  return (
        <div className="estilo container-fluid col-3">
          <div className ="row d-flex justify-content-center1">
            <div className='card  mb-4 card-productos'>
                <img className='container h-60 card-img-top mt-2' src={img} alt="Imagen Torta" />
                <div className="card-body">
                    <h5 className="card-title card-nombre" >{title}</h5>
                    <ul className="ps-0 card-descripcion">
                      <li>Porciones: {porciones} </li>
                    </ul>
                    <h5 className='card-precio'>Precio: $ {price}</h5>
                    <h5 className='card-precio'>Cantidad en stok: {stock}</h5>
                    <Link to={`/detalle/${id}`}>
                      <Button text="Ver más" />
                    </Link>
              </div>
            </div>            
          </div>
        </div>

  );
}

export default Card;







// import React from 'react';
// import ItemCount from '../ItemCount';
// import {Link} from 'react-router-dom';


// function Item ({id, title, price, porciones, img}){
//   return (
//     <div className='card d-flex container me-4'>
//         <h3>{title}</h3>
//         <img className='container h-60' src={img} alt="Imagen Torta" />
//         <p className='mt-1'>Porciones: {porciones} </p>
//         <p className='text-success'>Precio: $ {price}</p>
//         <Link  className='button'   to={ `/detalle/${id}` }> Ver Detalle </Link>
//         <ItemCount initial={1} stock={3}/> 
//     </div>
//   );


// }

// export default Item;


// const Item = (props) => {
//   return (
//     <div className='card d-flex container me-4'>
//         <h3>{props.title}</h3>
//         <img className='container h-60' src={props.img} alt="Imagen Torta" />
//         <p className='mt-1'>Porciones: {props.porciones} </p>
//         <p className='text-success'>Precio: $ {props.price}</p>
//         <Link  className='button'   to={ `/item/${id}` }> Ver Detalle </Link>
//         <ItemCount initial={1} stock={3}/> 
//     </div>
//   );
// };


// function APICall() {
//   setTimeout(() => {
//     console.log("SetTimeout iniciado en 3 segundos");
//     return {
//       id: "1",
//       name: "Dulce Pasteleria",
//       description: "Tortas deliciosas",
//       stock: 3,
//     };
//   }, 3000);
// }


// let resAPI = APICall();
// console.log(`Respuesta: ${resAPI}`);