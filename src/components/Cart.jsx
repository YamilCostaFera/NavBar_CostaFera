import React, {useContext, useState} from 'react';
import {CartContext} from './CartContext';
import {Card, CardImg, CardBody, CardTitle, CardText, CardSubtitle, Button} from "reactstrap";
import {Link} from 'react-router-dom';
import CartForm from './CartForm';


const Cart = () => {


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const finishOrder = () => setShow(true); 

        const test = useContext(CartContext);      
    
      
    return(
        <>
        <div className='container'> 
                <div className='d-flex justify-content-center mt-4'>
              
                                <h1>Tu carrito Artístico</h1>
              
                </div>
                <div>
                        
                        <Link to='/'><Button className='mt-4 mb-4 ' color="danger" variant='contained'>Volver a comprar</Button></Link>
          
                </div>            
                      
                 {/* ESTADO DEL CARRITO | VACIO-CON PRODUCTOS */}
                <div className=''>
                        {
                            (test.cartList.length > 0)
                            ? 
                          //carrito con productos - boton delete all
                          <div className='mb-5'>
                            <Button onClick={test.clear}>Delete All</Button>
                          </div>

                            : 
                          //carrito vacio
                          <div className='mb-5'>
                            <h3 className='cart-empty'>Tu carrito de Arte está vacio</h3>
                          </div>
                        }

                </div>

                {/* MAPEO DE PRODUCTOS AGREGADOS AL CARRITO Y TARJETA. */}
                <div className='d-flex row'>

                            {
                              test.cartList.length > 0 
                              
                              ?
                              //mapeo de productos agregados carrito y tarjeta con los datos adquiridos
                              test.cartList.map( productos => 

                                
                                <Card key={productos.idItem}>
                              
                                  <CardImg
                                    alt="Card image cap"
                                    src= {productos.imgItem}
                                    top
                                    width="100%"
                                  />
                              
                                  <CardBody>
                                    <CardTitle tag="h5">{productos.nameItem}</CardTitle>
                                    <CardSubtitle className="mb-2 text-muted" tag="h6">{productos.brandItem}</CardSubtitle>
                                    <CardText>$ {productos.priceItem}</CardText> 
                                    <CardText>{productos.qtyItem}</CardText>    
                                    <Button onClick={() => test.removeItem(productos.idItem)}>Eliminar</Button>                
                                  </CardBody>
                              
                                </Card>
                                
                              )
                              
                              :
                              //sin productos agregados - carrito vacio
                              <h1></h1>
                            }

                </div>

                {/* FORMULARIO Y TOTAL DE LA COMPRA             */}
                <div>

                        {
                              test.cartList.length > 0 &&
                              <Card>        
                                    {/* <CardBody>
                                      <Form>

                                              <FormGroup>
                                                  <Label for="Name">
                                                    Nombre
                                                  </Label>

                                                  <Input
                                                    id="Name"
                                                    name="text"
                                                    placeholder="Escribi tu nombre"
                                                    type="text"
                                                    required
                                                  />
                                              </FormGroup>

                                              <FormGroup>
                                                  <Label for="Phone">
                                                    Número de contacto
                                                  </Label>

                                                  <Input
                                                    id="Phone"
                                                    name="number"
                                                    placeholder="Escribí tu celular"
                                                    type="number"
                                                    required
                                                  />
                                              </FormGroup>
                                        
                                              <FormGroup>
                                                  
                                                  <Label for="Email">
                                                    Email
                                                  </Label>
                                                  
                                                  <Input
                                                    id="Email"
                                                    name="email"
                                                    placeholder="with a placeholder"
                                                    type="email"
                                                    required
                                                  />

                                              </FormGroup>

                                      </Form>
  
                                    </CardBody>        */}

                                    <CardBody>

                                        <CardTitle tag="h5">Your Order</CardTitle>
                                        <CardSubtitle className="mb-2 text-muted" tag="h6">Subtotal</CardSubtitle>
                                        <CardText>{test.calcSubTotal()}</CardText> 
                                        <CardText>Total</CardText>
                                        <CardText>{test.calcTotal()}</CardText>                       
                                        <Button onClick={finishOrder}>FINALIZAR COMPRA</Button>                        

                                    </CardBody>
                                    
                                    <CartForm handleClose={handleClose} show={show} />
                            
                            </Card>
                          }

                </div>          

          </div>
        
        </>
    );
}

export default Cart;




