import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { firestoreFetch } from '../utils/firestoreFetch';


const ItemListContainer = () => {

    const [cuadros, setcuadros] = useState([]);
    const { idCategory } = useParams();

// component did update

useEffect(() => {
    firestoreFetch(idCategory)
        .then(result => setcuadros(result))
        .catch(err => console.log(err));
}, [idCategory]);


// component will unmount

useEffect(()=> {
    return (()=> {
          setcuadros([]);
    })
}, []);
    

    return (
        <>
        <ItemList productos={cuadros} />
        </>
        
    )
}

export default ItemListContainer;