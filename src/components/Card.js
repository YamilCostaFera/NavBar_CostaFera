import React from 'react';
import ItemCount from './ItemCount';


const Item = (props) => {
  return (
    <div className='card d-flex container me-4'>
        <h3>{props.title}</h3>
        <img className='container h-60' src={props.img} alt="Imagen Torta" />
        <p className='mt-1'>Porciones: {props.porciones} </p>
        <p className='text-success'>Precio: $ {props.price}</p>
        <ItemCount initial={1} stock={3}/> 
    </div>
  );
};


function APICall() {
  setTimeout(() => {
    console.log("SetTimeout iniciado en 3 segundos");
    return {
      id: "1",
      name: "Dulce Pasteleria",
      description: "Tortas deliciosas",
      stock: 3,
    };
  }, 3000);
}


let resAPI = APICall();
console.log(`Respuesta: ${resAPI}`);

export default Item;


