import React from 'react';
import './ItemCount.css';

    function ItemCount({initial, stock, onAdd}){   

    const [cant, setClicks] = React.useState(initial);

    const handleIncrement= () => {
        cant === stock ? alert ("no hay mas stock") :  setClicks(cant + 1);
    }    

    const handleDecrement= () => {
        if (cant > 0){
            setClicks(cant-1)
        }
    }    

    return(
        <>
        <div class='container-fluid'>
            <h5 className='itemCount-cantidad center'>Cantidad</h5>
            <h5 className='itemCount-cantidad center'> {cant} </h5>
            <div class="container d-flex justify-content-center btn-group mb-2 col-2" role="group" aria-label="Basic outlined example">    
                <button onClick={handleDecrement } type="button" class="btn btn-outline-primary" > - </button>
                <button onClick={ handleIncrement } type="button" class="btn btn-outline-primary" > + </button>
            </div>
            {
                cant > 0 ?
                 <div className='bottom attached button container d-flex justify-content-center'>
                     <button  onClick={()=>onAdd()} class='mt-4 col-4 btn btn-outline-primary' > Añadir al carrito </button>
                 </div>
                :
                <div className='light bottom attached button disable container d-flex justify-content-center'>
                      <button  class='mt-4 col-4 btn btn-outline-secondary' > Añadir al carrito </button>
                 </div>
                

            }

            
        </div>
        
        </>
    )    

}

export default ItemCount;
