import React from "react";
import data from "../../data/data.js";


const ItemList = () => {
    {data.map((item) => {
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
    
}

export default ItemList;
