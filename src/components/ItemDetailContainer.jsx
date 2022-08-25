import React,{ useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import {firestoreFetchOne} from "../utils/firestoreFetch.js";
import ItemDetail from './ItemDetail';


const ItemDetailContainer = () => {

    const [cuadros, setcuadros] = useState({});
    const { idItem } = useParams();

    useEffect(() => {
        firestoreFetchOne(idItem)
            .then(result => setcuadros(result))
            .catch(err => console.log(err))
    }, []);

    return (
        <ItemDetail productos={cuadros} />
    )
}

export default ItemDetailContainer;