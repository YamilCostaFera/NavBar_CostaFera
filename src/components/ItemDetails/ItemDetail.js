import React from "react";

function ItemDetail (products){
    return (
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
    )
}

export default ItemDetail;
