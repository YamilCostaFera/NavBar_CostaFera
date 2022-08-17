import React, { useEffect, useState } from "react";
import data from "../../data/data";
import CardDetail from "./CardDetail";
import { useParams } from "react-router-dom";

function ItemDetailContainer({ itemid }) {
  const [item, setItem] = useState({});

  const { id } = useParams();

  function traerProducto() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let itemRequested = data.find(
          (elemento) => elemento.id === Number(id)
        );

        if (itemRequested === undefined) reject("No encontramos el item");
        else resolve(itemRequested);
      }, 500);
    });
  }

  useEffect(() => {
    traerProducto()
      .then((respuesta) => setItem(respuesta))
      .catch((error) => alert(error));
  }, []);

  return (
    <div className="main">
      <CardDetail
        id={item.id}
        title={item.title}
        price={item.price}
        img={item.img}
        category={item.category}
        stock={item.stock}
        porciones={item.porciones}
        description={item.description}
      />
    </div>
  );
}

export default ItemDetailContainer;





// import React, { useState, useEffect } from "react";
// // import ItemDetail from "./ItemDetail";
// import CardDetail from "./CardDetail" ;


// function traerProductos(){
//     return new Promise ((resolve) =>{
//         setTimeout(
//             () => resolve (
//                 [{
//                     "id": 1,
//                     "title": "Cheese Cake",
//                     "stock": 5,
//                     "price": 2200,
//                     "img": "https://d320djwtwnl5uo.cloudfront.net/recetas/share/torta_Wk8PuOpz1Jl6D3KARHjErity4YwfVm.png",
//                     "description": "Un pastel de queso o tarta de queso es un postre muy popular desde el siglo XX hecho a base de ricota, queso quark, azúcar y algunas veces otros ingredientes, tales como: huevos, crema de leche o nata, harina, patata, almendras o frutas.",
//                     "porciones": 10,
//                 }
//                 ]
//             ),500);
//     } )
// }

// function ItemDetailContainer() {
    
//     const [products, setProducts] = useState([]);
    
//         useEffect(() => {
//             traerProductos()
//               .then((respuesta) => {
//                 setProducts(respuesta);
//               });
//           }, []);
    
//         return (
//         <div>
//             <div className= 'd-flex'>
//             {products.map((item) => {
//                     return (
//                         <CardDetail
//                             key={item.id}
//                             title={item.title}
//                             price={item.price}
//                             porciones={item.porciones}
//                             description={item.description}
//                             img={item.img}
//                 />
//                 );
//                     })}
//             </div>
//         </div>
//         )    

// }

// export default ItemDetailContainer;