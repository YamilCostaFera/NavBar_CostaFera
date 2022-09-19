import 'bootstrap/dist/css/bootstrap.min.css';
import logonav from '../img/logotamachicoo.png';
import CartWidget from './CartWidget';
import { Link } from "react-router-dom";
import React from 'react';

const Navbar = () => {
    return (
        <div className="App">
              
              <nav className="navbar navbar-expand-lg navbar-light">
                
                    <Link to='/'>
                        <img className= "logo mb-2 mt-2 ms-4" src={logonav}/>
                    </Link>
                    
                    <Link style={{textDecoration: "none"}} to='/'>
                        <h3 className='ms-5 navbar-title' >Art Collection by Yamil</h3>
                    </Link>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">Art Collection by Yamil</span>
                    </button>

                    <div className="collapse navbar-collapse d-flex justify-content-around" id="navbarNav">

                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active me-5">
                                <Link to='/category/Urbana' style={{textDecoration: "none", color: 'white',}}><h4 className='navbar-categorias'> FOTOGRAFIAS URBANS </h4><span class="sr-only"></span></Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/category/Natural' style={{textDecoration: "none", color: 'white'}}><h4 className='navbar-categorias'> FOTOGRAFIAS NATURE </h4></Link>
                            </li>                                   
                        </ul>

                        <div className="nav-item d-flex justify-content-end">
                            <Link to='/cart' style={{textDecoration: "none", color: "white"}}><CartWidget/></Link>
                        </div> 

                    </div>
              </nav>
        </div>
    );
}

export default Navbar;


