import React, { useState, useEffect } from "react";
import data from "../../data/data";
import CardCategory from "./CardCategory";
import { useParams } from "react-router-dom";

function ItemCategoryContainer({ itemid }) {
  const [item, setItem] = useState({});

  const {category} = useParams();

  function traerProductos() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let itemRequested = data.filter(
          (elemento) => elemento.category === (category)
        );

        if (itemRequested === undefined) reject("No encontramos el item");
        else resolve(itemRequested);
      },);
    });
  }

  useEffect(() => {
    traerProductos()
      .then((respuesta) => setItem(respuesta))
      .catch((error) => alert(error));
  }, []);

  return (
    <div className="main">
      <CardCategory
        id={item.id}
        title={item.title}
        price={item.price}
        img={item.img}
        category={item.category}
        stock={item.stock}
      />
    </div>
  );
}

export default ItemCategoryContainer;
