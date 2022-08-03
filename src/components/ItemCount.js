import React from 'react';

    function ItemCount(props){
    console.log(props.stock);    

    const [cant, setClicks] = React.useState(1);

    const handleIncrement= () => {
        cant===props.stock ? alert ("no hay mas stock") :  setClicks(cant + 1);
    }    

    const handleDecrement= () => {
        cant===props.initial ? setClicks (cant) : setClicks(cant - 1);
    }    

    const onAdd = () => {
        alert (`Añadiste al carrito ${cant} tortas`);
    }

    return(
        <>
        <div class='container-fluid'>
            <h1>Cantidad</h1>
            <h3> {cant} </h3>
            <div class="btn-group mb-2 col-2" role="group" aria-label="Basic outlined example">    
                <button onClick={handleDecrement } type="button" class="btn btn-outline-primary" > - </button>
                <button onClick={ handleIncrement } type="button" class="btn btn-outline-primary" > + </button>
            </div>
            <div>
                <button onClick={onAdd} class='mt-4 col-4 btn btn-outline-primary' > Añadir al carrito </button>
            </div>
        </div>
        
        </>
    )    

}

export default ItemCount;

