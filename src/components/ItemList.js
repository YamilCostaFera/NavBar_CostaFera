import React, { useState } from "react";
import Card from './Card';

const ItemList = () => {

    const  [items] = useState([{
        "id": 1,
        "title": "Cheese Cake",
        "stock": 5,
        "price": 2200,
        "img": "https://d320djwtwnl5uo.cloudfront.net/recetas/share/torta_Wk8PuOpz1Jl6D3KARHjErity4YwfVm.png",
        "porciones": 10,
    },{
        "id": 2,
        "title": "Choco Oreo",
        "stock": 4,
        "price": 2300,
        "img": "https://d320djwtwnl5uo.cloudfront.net/recetas/share/torta_Wk8PuOpz1Jl6D3KARHjErity4YwfVm.png",
        "porciones": 10,
    },{
        "id": 3,
        "title": "Lemon Pie",
        "stock": 6,
        "price": 2000,
        "img": "https://d320djwtwnl5uo.cloudfront.net/recetas/share/torta_Wk8PuOpz1Jl6D3KARHjErity4YwfVm.png",
        "porciones": 12,
    },
    ]);
    
    return(
        <div className= 'd-flex'>
            {items.map((item) => {
                    return (
                        <Card
                            key={item.id}
                            title={item.title}
                            price={item.price}
                            porciones={item.porciones}
                            img={item.img}
                />
                );
                    })}
        </div>
    ); 
};

export default ItemList;
