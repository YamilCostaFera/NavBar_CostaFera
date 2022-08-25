import React from 'react';
import Item from './Item';
import { Container, Row} from "reactstrap";

 const ItemList = ({ productos }) => {
   
    return(
        <>
        <Container>
            <Row>
                
                {productos.map( (product) => (<Item key={product.id} {...product} />)
                )}
                
            </Row>
        </Container>
        </>
    )
}


export default ItemList;