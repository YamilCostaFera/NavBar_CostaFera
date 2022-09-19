import { Button } from '@mui/material';
import React, { useEffect, useState } from "react";


const ItemCount = ({stock = 0, initial = 1, onAdd}) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(initial);
    },[]);


    const increment = () => {
        if (count < stock ){
            setCount(count + 1);
           }
        }
        
    const decrement = () => {
        if (count > initial){
            setCount(count - 1);
        }

    }
    return ( 
      <div className="container">
        <div className='d-flex justify-content-center' >
        <Button className='me-2' variant="contained" onClick={decrement}>-</Button>
            <p className='Count'>{count}</p>
          <Button className='ms-2' variant="contained" onClick={increment}>+</Button>
        </div>
          <div className='d-flex justify-content-center mt-4'>
          {
                count > 0 
                ? 
                <Button  className='w-100' variant="contained" color="success" size="lg" onClick={() => onAdd(count)}>Add to Cart</Button>
                : 
                <Button  className='w-100' outline color="info" >Add to Cart</Button>
            }
          </div>
          
      </div>
    )
}

export default ItemCount;



