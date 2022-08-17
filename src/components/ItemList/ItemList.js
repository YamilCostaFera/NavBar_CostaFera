import React, { useState } from "react";
import Card from './Card';
import data from "../../data/data";

const ItemList = () => {

    const  [items] = useState(data);
    
    return(
        <div className= 'd-flex'>
            {items.map((item) => {
        return (
          <Card
            id={item.id}
            title={item.title}
            price={item.price}
            category={item.category}
            img={item.img}
            stock={item.stock}
            porciones={item.porciones}
          />
        );
      })}
        </div>
    ); 
};

export default ItemList;
