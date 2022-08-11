import React from 'react';
import ItemCount from '../ItemCount';


const CardDetail = (props) => {
  return (
    <div className='bg-danger card d-flex container ms-5 mt-5 col-10 row justify-content-center mb-5'>
        <div>
             <td className='col-4'>
                <img className='container h-60 mt-5' src={props.img} alt="Imagen Torta" />
                <h2 class="name ps-4 mt-2">{props.title} </h2>
             </td>
             <td>
                <p className='mt-1'>{props.description} </p>
                <p>${props.price}</p>
                <p className='mt-1'>Porciones: {props.porciones} </p>        
                <div  className='mb-3'>
                <ItemCount initial={1} stock={3}/>                        
                </div> 
             </td>
             <td class="fila_cantidad">
                
             </td>
        </div>
    </div>
  );
};

export default CardDetail;


