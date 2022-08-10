import React from "react";
import ItemCount from "./ItemCount";
import data from "../../data/data.js";


function traerProductos() {
    return new Promise((resolve) => {
      setTimeout(() => resolve(data), 2500);
    });
  }

export default function ItemListContainer(){
    const [data,setData] = useState([]);

    useEffect(() => {
        traerProductos().then((respuesta) => {
            setData(respuesta);
            
        });
    }, []);

    return (
    <div className="container mx-auto mt-5">
        {/* El mapa debería realizarse en el componente <ItemList>, al que le pasamos el estado "products" mediante props */}
    <ItemList data:data/>
    <ItemCount initial={1} stock={data.stock}/>
    </div>
       );
}








// function ItemListContainer(props) {
//     return (
//         <div>
//             <div className="container-fluid col-5 card mt-4">
//                 <h1 className="card_style">Torta: {props.greeting}</h1>
//             </div>
//             <ItemCount initial={1} stock={3}/>
//         </div>
//     )
// }

// export default ItemListContainer;


// // import React, { useState, useEffect } from "react";
// // import data from "../../data/data";
// // import Card from "../Card/Card";


// // const ItemListContainer = () => {
// //   const [products, setProducts] = useState([]);

// //   useEffect(() => {
// //     traerProductos()
// //       .then((respuesta) => {
// //         setProducts(respuesta);
// //       })
// //       .catch((error) => {
// //         console.log(error);
// //       });
// //   }, []);



