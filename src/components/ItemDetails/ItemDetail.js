
import CardDetail from "./CardDetail";
import React, { useState } from "react";

import data from "../../data/data";

const ItemDetail = () => {

    const  [items] = useState(data);
    
    return(
        <div className= 'd-flex'>
            {items.map((item) => {
                    return (
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
                );
                    })}
        </div>
    ); 
};

export default ItemDetail;


