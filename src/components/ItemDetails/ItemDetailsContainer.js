import React, { useState, useEffect } from "react";
// import ItemDetail from "./ItemDetail";
import CardDetail from "./CardDetail";

function traerProductos(){
    return new Promise ((resolve) =>{
        setTimeout(
            () => resolve (
                [{
                    "id": 1,
                    "title": "Cheese Cake",
                    "stock": 5,
                    "price": 2200,
                    "img": "https://d320djwtwnl5uo.cloudfront.net/recetas/share/torta_Wk8PuOpz1Jl6D3KARHjErity4YwfVm.png",
                    "description": "Un pastel de queso o tarta de queso es un postre muy popular desde el siglo XX hecho a base de ricota, queso quark, azúcar y algunas veces otros ingredientes, tales como: huevos, crema de leche o nata, harina, patata, almendras o frutas.",
                    "porciones": 10,
                }
                ]
            ),2000);
    } )
}

function ItemDetailContainer() {
    const [products, setProducts] = useState([]);
        
        useEffect(() => {
            traerProductos()
              .then((respuesta) => {
                setProducts(respuesta);
              });
          }, []);
        
        return (
        <div>
            <div className= 'd-flex'>
            {products.map((item) => {
                    return (
                        <CardDetail
                            key={item.id}
                            title={item.title}
                            price={item.price}
                            porciones={item.porciones}
                            description={item.description}
                            img={item.img}
                />
                );
                    })}
            </div>
        </div>
        )    

}

export default ItemDetailContainer;