import React from "react";

function ItemListContainer(props) {
    return (
        <div className="container-fluid col-5 card mt-4">
            <h1 className="card_style">Torta: {props.greeting}</h1>
        </div>
    )
}

export default ItemListContainer;
