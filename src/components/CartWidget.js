import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartShopping}  from "@fortawesome/free-solid-svg-icons";



function CartWidget(){
    return(
        <FontAwesomeIcon icon= {faCartShopping}></FontAwesomeIcon>
    );
}

export default CartWidget;
