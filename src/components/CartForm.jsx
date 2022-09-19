import React, { useRef, useState, useContext } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useCartContext } from './CartContext';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { addDoc, collection, doc, updateDoc, serverTimestamp, getFirestore, increment } from "firebase/firestore";
import {CartContext} from './CartContext';



const CartForm = ({ show, handleClose }) => {
    const [idOrder, setIdOrder] = useState("")
    const [compraConfirmada, setCompraConfirmada] = useState(false)
    const [dataRejected, setDataRejected] = useState(false);
    const [nombre, setNombre] = useState("")
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState(0);
    const { clear } = useCartContext();
    const  db = getFirestore();
    const  newOrderRef = collection(db, 'orders');
    


    const test = useContext(CartContext);
    const productsDataBase = test.cartList.map(products => ({
          
        id: products.idItem,
        title: products.nameItem,
        price: products.priceItem,
        qty: products.qtyItem
      
      }));




    const order = {
        buyer: {
            name: nombre,
            email: email,
            phone: phone,
            address: address,
        },
        items: productsDataBase,
        total: test.calcTotal(),
        date: serverTimestamp()
    }

    const updateNombre = (e) => {
        setNombre(e.target.value);
    }
    const updateEmail = (e) => {
        setEmail(e.target.value);
    }
    const updateAddress = (e) => {
        setAddress(e.target.value);
    }
    const updatePhone = (e) => {
        setPhone(parseInt(e.target.value));
    }

    let nameRef = useRef(); let emailRef = useRef(); let phoneRef = useRef(); let addressRef = useRef()

    
    const createOrderInFirestore  = () => {
        addDoc( newOrderRef, order)
            .then((res) => {
                setIdOrder(res.id)
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setCompraConfirmada(true)
            })
            test.cartList.forEach(async (products) => {
            const itemRef = doc( db, 'products', products.idItem)
            await updateDoc(itemRef, {
                stock: increment(- products.qtyItem),
            })
        })
    }


    //VALIDACIONES DE LOS DATOS DEL FORMULARIO

    const validacionForm = (e) => {
        e.preventDefault();

        let checkEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (nombre === "") {
            nameRef.current.focus();
            setDataRejected(true)
        
        } 
        else if (!checkEmail.test(email)) {
            emailRef.current.focus();
            setDataRejected(true)
        } 
        else if (phone <= 0 || isNaN(phone)) {
            phoneRef.current.focus();
            setDataRejected(true)
        } 
        else if (address === "") {
            addressRef.current.focus();
            setDataRejected(true)
        } 
        else {
            //crea la orden en firebase
            createOrderInFirestore ();
            setDataRejected(false)
        }
    }


    return (
        <>
            {compraConfirmada ?
                //MODAL FIN DEL PEDIDO
                <Modal show={show} onHide={handleClose} size='l' centered  >
                    <Modal.Header>
                        <Modal.Title >Pedido realizado!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='text-center'>
                        <h4>Su pedido fue realizado con exito.</h4>
                        <h5>Id del pedido:{idOrder}</h5>
                        <p>A la brevedad nos comunicaremos contigo!</p>
                    </Modal.Body>
                    <Modal.Footer className="justify-content-center">
                        <Button className="w-100" color="danger" onClick={clear}>
                            Cerrar
                        </Button>
                    </Modal.Footer>
                </Modal>
                :
                <Modal style={{ overflow: "auto", }} show={show} onHide={handleClose} size='xl' >
                    <Modal.Body>
                        {/* FORMULARIO */}
                        <div className="container">
                              <div className="d-flex justify-content-center">
                                    <Card bg="warning">
                                            <Form className="m-3" onSubmit={validacionForm}>

                                                <Form.Group className="mb-3" controlId="formBasicName">
                                                    <Form.Label className="text-dark">Nombre</Form.Label>
                                                    <Form.Control onChange={(e) => updateNombre(e)} type="text" placeholder="Escribí tu nombre" required />
                                                </Form.Group>
                                                
                                                <Form.Group className="mb-3" controlId="formBasicAdress">
                                                    <Form.Label className="text-dark">Dirección</Form.Label>
                                                    <Form.Control onChange={(e) => updateAddress(e)} type="text" placeholder="Ingrese la dirección de entrega" />
                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label className="text-dark">Email</Form.Label>
                                                    <Form.Control onChange={(e) => updateEmail(e)} type="email" placeholder="Ingrese su email" required />
                                                </Form.Group>
                                                
                                                <Form.Group className="mb-3" controlId="formBasicPhone">
                                                    <Form.Label className="text-dark">Celular</Form.Label>
                                                    <Form.Control onChange={(e) => updatePhone(e)} type="text" required placeholder="Escribí tu celular" />
                                                </Form.Group>
                                                
                                                <Button type="submit" className='w-100 mt-3 mb-3 fw-bold'  variant='outline-danger' color="secondary">
                                                    Finalizar pedido
                                                </Button>
                                            
                                            </Form>

                                </Card>
                              </div>
                        
                        </div>
                        
                    </Modal.Body>
                    <Modal.Footer className="justify-content-center">
                        <Button className="w-75" color="danger" variant="outline-danger" onClick={handleClose}>
                            Cancelar
                        </Button>
                    </Modal.Footer>
                </Modal>
            }
        </>

    )
}
export default CartForm;