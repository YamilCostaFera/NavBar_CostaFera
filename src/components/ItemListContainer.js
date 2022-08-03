import React from "react";
import ItemCount from "./ItemCount";

function ItemListContainer(props) {
    return (
        <div>
            <div className="container-fluid col-5 card mt-4">
                <h1 className="card_style">Torta: {props.greeting}</h1>
            </div>
            <ItemCount initial={1} stock={3}/>
        </div>
    )
}

export default ItemListContainer;
