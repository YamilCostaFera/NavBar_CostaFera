import React from "react";
import ItemList from "./ItemList";


function ItemListContainer (){
  return (
    <div className="container mx-auto mt-5">
    <ItemList />
    </div>
       );
}

export default ItemListContainer;



// function ItemListContainer(props) {
//     return (
//         <div>
//             <div className="container-fluid col-5 card mt-4">
//                 <h1 className="card_style">Torta: {props.greeting}</h1>
//             </div>
//             <ItemCount initial={1} stock={3}/>
//         </div>
//     )
// }

// export default ItemListContainer;

