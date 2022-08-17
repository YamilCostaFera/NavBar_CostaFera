import React, { useState, useEffect } from "react";
import data from "../../data/data";
// import Card from "./Card";
import ItemList from "./ItemList";

function traerProductos() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(data), 1500);
  });
}

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    traerProductos()
      .then((respuesta) => {
        setProducts(respuesta);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  return (
    <div className="d-flex">
      {/* El mapa debería realizarse en el componente <ItemList>, al que le pasamos el estado "products" mediante props */}
     <ItemList {...products}/>
    </div>
  );
};

export default ItemListContainer;



