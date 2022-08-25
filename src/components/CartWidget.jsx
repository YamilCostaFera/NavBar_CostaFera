import { Badge } from '@mui/material';
import { useContext, useEffect } from 'react';
import { CartContext } from './CartContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartShopping}  from "@fortawesome/free-solid-svg-icons";
import React from 'react';

const CartWidget = () => {
    const test = useContext(CartContext);
    
return (
        
        <Badge badgeContent={test.calcItemsQty()} color="secondary">
                <FontAwesomeIcon icon= {faCartShopping}></FontAwesomeIcon>
        </Badge>
 
);

};

export default CartWidget;
