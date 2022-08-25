import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartContextProvider from './components/CartContext';
import React from "react";

 
const App = () => {

  return (
    <CartContextProvider>
       <BrowserRouter>
       <Navbar />
       <Routes>
         <Route path='/' element={<ItemListContainer />}/>
         <Route path='/category/:idCategory' element={<ItemListContainer />}/>
         <Route path='/item/:idItem' element={<ItemDetailContainer />}/>
         <Route path='/cart' element={<Cart />} />
       </Routes>
       </BrowserRouter>
    </CartContextProvider>   
  );
}

export default App;
