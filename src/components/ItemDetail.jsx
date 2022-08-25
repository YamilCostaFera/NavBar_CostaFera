import React from 'react';
import {useState, useContext} from 'react';
import { Link } from "react-router-dom";
import ItemCount from './ItemCount';
import {Button} from "reactstrap";
import {Card, CardImg, CardBody, CardTitle, CardText, CardSubtitle,} from "reactstrap"
import { CartContext } from './CartContext';

 const ItemDetail = ({ productos }) => {
   const [itemCount, setItemCount] = useState(0);
   const test = useContext(CartContext);

   const onAdd = (quantity) => {
     alert(`Agregaste ${quantity} cuadros al carrito!`);
     setItemCount(quantity);
     test.addToCart(productos, quantity);
   }

    return(
        <>
        {
          productos && productos.img
          ?            
            <div className='container' >
                <div className='d-flex justify-content-center' >

                      <Card key={productos.id} >

                              <CardImg
                                      className=''
                                      alt="Card image cap"
                                      src= {productos.img}
                                      top
                                      width="100%"/>

                              <CardBody>

                                    <CardTitle tag="h5">{productos.nombre}</CardTitle>
                                    <CardSubtitle className="mb-2 text-muted" tag="h6">{productos.marca}</CardSubtitle>
                                    <CardSubtitle className="mb-2 text-muted" tag="h6">{productos.description}</CardSubtitle>
                                    <CardText>${productos.precio}</CardText>
                                    <CardSubtitle className="mb-2 text-muted" tag="h6">Unidades disponibles:{productos.stock}</CardSubtitle>
                              
                              </CardBody>
                              
                              {/* ITEMCOUNT */}
                              {  
                              itemCount === 0        
                              ? <ItemCount stock={productos.stock} initial={itemCount} onAdd={onAdd} />
                              : <div className="container d-flex justify-content-center"> Añadido! </div>
                              }
                            <div className='container'>
                                <Button  className='w-100 mt-3 mb-3' variant="contained" color="primary" size="sm"> 
                                    <Link  className="link boton-volver" to="/" style={{textDecoration: "none"}} >
                                        Volver
                                    </Link> 
                                </Button>
                            </div>

                      </Card>

                </div>
            </div>
        : <p>Cargando...</p>
      }
       
          
        </>
    );
}


export default ItemDetail;