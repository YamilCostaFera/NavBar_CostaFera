import React, {useContext} from 'react';
import {CartContext} from './CartContext';
import {Card, CardImg, CardBody, CardTitle, CardText, CardSubtitle, Button} from "reactstrap"
import {Link} from 'react-router-dom';
import { collection, doc, setDoc, serverTimestamp, updateDoc, increment } from "firebase/firestore";
import db from '../utils/firebaseConfig';



const Cart = () => {

    const test = useContext(CartContext);

    const finishOrder = () => {
      
      const productsDataBase = test.cartList.map(products => ({
        
        id: products.idItem,
        title: products.nameItem,
        price: products.priceItem,
        qty: products.qtyItem
      
      }));
  

      test.cartList.forEach(async (products) => {
      
        const itemRef = doc(db, "products", products.idItem);
      
        await updateDoc(itemRef, {
          stock: increment(-products.qtyItem)
        });
      });
  

      let order = {
      
        buyer: {
          name: "Juan Perez",
          email: "juan@perez.com",
          phone: "123456789"
        },
      
        total: test.calcTotal(),
        items: productsDataBase,
        date: serverTimestamp()
      
      };
    
      console.log(order);
      
      const createOrderInFirestore = async () => {
      
      
        const newOrderRef = doc(collection(db, "orders"));
        await setDoc(newOrderRef, order);
        return newOrderRef;
      }
    

      createOrderInFirestore()

        .then(result => alert('Muchas Gracias por tu compra! A la brevedad nos comunicaremos para coordinar la entrega.\n\n\n ID de tu orden:\n\n\nOrder ID: ' + result.id + '\n\n'))
        .catch(err => console.log(err));
    
      test.clear();
    
    }

    return(
        <>
        <div className='container'> 
                <div className='d-flex justify-content-center mt-4'>
              
                                <h1>Tu carrito Artístico</h1>
              
                </div>
                <div>
                        
                        <Link to='/'><Button className='mt-4 mb-4 ' color="danger" variant='contained'>Volver a comprar</Button></Link>
          
                </div>            
                      

                <div className=''>
                        {
                            (test.cartList.length > 0)
                            ? 
                            <div className='mb-5'>
                            <Button onClick={test.clear}>Delete All</Button>
                           </div>
                            : 
                            <div className='mb-5'>
                              <h3 className='cart-empty'>Tu carrito de Arte está vacio</h3>
                            </div>
                        }
                        
                        
                        
                </div>
                
                <div className='d-flex row'>

                            {
                              test.cartList.length > 0 ?
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
                              :<h1></h1>
                            }
                    
                </div>

                <div>

                        {
                              test.cartList.length > 0 &&
                              <Card>               
                                    <CardBody>
                                        <CardTitle tag="h5">Your Order</CardTitle>
                                        <CardSubtitle className="mb-2 text-muted" tag="h6">Subtotal</CardSubtitle>
                                        <CardText>{test.calcSubTotal()}</CardText> 
                                        <CardText>Total</CardText>
                                        <CardText>{test.calcTotal()}</CardText>                       
                                        <Button onClick={finishOrder}>FINALIZAR COMPRA</Button>                
                                    </CardBody>
                            </Card>
                          }

                </div>          

          </div>
        
        </>
    );
}

export default Cart;




