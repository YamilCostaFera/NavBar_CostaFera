import React from 'react';
import {Card, CardImg, CardBody, CardTitle, CardText, CardSubtitle, Button} from "reactstrap";
import { Link } from "react-router-dom";

const Item = ({ id, nombre, marca, precio, img }) => {
    
    return(
        <>
    <Card key={id} className='card-style' >

        <CardImg
            alt="Card image cap"
            src= {img}
            top
            width="100%"
            className='mt-3'
          />

        <CardBody>
          
              <CardTitle tag="h5">{nombre}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">{marca}</CardSubtitle>
              <CardText>${precio}</CardText>

              <Link to={`/item/${id}`} style={{textDecoration: "none"}}>
                    <div className='card-boton'>
                        <Button color="danger"
                                className='w-100'
                        >
                          Ver detalle
                        </Button>
                    </div>
                    
              </Link>

        </CardBody>
        
    </Card>
      
      </>
    );
}

export default Item;