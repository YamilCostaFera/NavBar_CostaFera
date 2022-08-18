// import "./card.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount";

function CardDetail({ title, price, img, stock, porciones, description }) {
  const [add,setAdd] = useState(false)

  const addToCart = () => {
      setAdd(!add)
    }



  return (
    
    <div className='bg-light card d-flex container ms-5 mt-5 col-10 row justify-content-center mb-5'>
        <div>
              <td className='col-4'>
                <img className='container h-60 mt-5' src={img} alt="Imagen Torta" />
                <h2 class="name ps-4 mt-2">{title} </h2>
              </td>
              <td>
                <p className='mt-1'>{description} </p>
                <p>${price}</p>
                <p className='mt-1'>Porciones:{porciones}</p>        
              </td>
              <td class="fila_cantidad">
                    <div>
                            {
                              add ? 
                                  <div className="container d-flex justify-content-center"> Añadido! </div>
                                  :
                                  <ItemCount initial={1} stock={stock} onAdd={addToCart} />                        
                            }
                      </div>
                      <div className='container d-flex justify-content-center'>
                          <button class='bottom attached button mt-4 col-4 btn btn-outline-primary' > Finalizar Compra </button>
                      </div>
                      <div  className='container d-flex justify-content-center mb-3'>
                        <button class='bottom attached button mt-4 col-4 btn btn-outline-primary' >
                          <Link to="/">Volver</Link>                     
                        </button>

                      </div> 
              </td>
        </div>
    </div>

  );
}

export default CardDetail;








// import React from 'react';
// import ItemCount from '../ItemCount';


// const CardDetail = (props) => {
//   return (
//     <div className='bg-danger card d-flex container ms-5 mt-5 col-10 row justify-content-center mb-5'>
//         <div>
//              <td className='col-4'>
//                 <img className='container h-60 mt-5' src={props.img} alt="Imagen Torta" />
//                 <h2 class="name ps-4 mt-2">{props.title} </h2>
//              </td>
//              <td>
//                 <p className='mt-1'>{props.description} </p>
//                 <p>${props.price}</p>
//                 <p className='mt-1'>Porciones: {props.porciones} </p>        
//                 <div  className='mb-3'>
//                 <ItemCount initial={1} stock={props.stock}/>                        
//                 </div> 
//              </td>
//              <td class="fila_cantidad">
                
//              </td>
//         </div>
//     </div>
//   );
// };

// export default CardDetail;


