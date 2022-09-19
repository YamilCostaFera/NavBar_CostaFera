import React from 'react';
import ItemCount from './ItemCount';
import {Card, CardImg, CardBody, CardTitle, CardText, CardSubtitle,} from "reactstrap";



const Loader = () => {
   
    return(
        <>
            <div className='container' >
                <div className='d-flex justify-content-center' >

                    <Card >

                            <CardImg
                                    className=''
                                    alt="Card image cap"
                                    src= {'https://i.stack.imgur.com/ATB3o.gif'}
                                    width="100%"/>

                            <CardBody>

                                    <CardTitle tag="h5"></CardTitle>
                                    <CardSubtitle className="mb-2 text-muted" tag="h6"></CardSubtitle>
                                    <CardSubtitle className="mb-2 text-muted" tag="h6"></CardSubtitle>
                                    <CardText className='text-center' >Aguarde un momento</CardText>
                                <div class="text-center ">
                                    <div class="spinner-border text-primary" role="status">
                                        <span class="visually-hidden">Loading...</span>
                                    </div>
                                </div>

                            </CardBody>

                            {/* ITEMCOUNT */}        
                            <ItemCount stock={0} initial={0}/>    
                            <div className='container d-flex justify-content-center'>

                                <button class="btn btn-primary" type="button" disabled>
                                    <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                                    Loading...
                                </button>

                            </div>

                    </Card>

                </div>
            </div>
        </>
    )
}


export default Loader;