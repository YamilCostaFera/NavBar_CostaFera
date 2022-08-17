import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemList/ItemListContainer';
import ItemDetailContainer from './components/ItemDetails/ItemDetailsContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ItemCategoryContainer from './components/Category/ItemCategoryContainer';
import Footer from './components/Footer/Footer';
import BtnUp from './components/BtnUp/BtnUp';



function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/detalle/:id" element={<ItemDetailContainer />} />
          <Route path="/category/:idCategory" element={<ItemCategoryContainer />} />
        </Routes>
        <Footer />
        <BtnUp />
      </BrowserRouter> 
    </div>
  );
}

export default App;







// import React from 'react';
// import './App.css';
// import NavBar from './components/NavBar';
// import ItemListContainer from './components/ItemList/ItemListContainer';
// import ItemDetailContainer from './components/ItemDetails/ItemDetailsContainer';
// import {BrowserRouter, Routes, Route} from "react-router-dom";


// function App() {
//   return (
//     <div class="App">
//       <BrowserRouter>
//         <NavBar/>
//         <Routes>
//           <Route path='/' element={<ItemListContainer />}/>
//           <Route path='/detalle' element={<ItemDetailContainer />}/> 
//           {/* <Route path='/detalle:id' element={<ItemDetailContainer />}/> */}
//           <Route path='*' element= { <h1> 404 - No encontrado </h1>}/>
//         </Routes>

//       </BrowserRouter>



//       {/* <ItemListContainer greeting="Torta Oreo" /> */}
      
//     </div>

//   )
// }

// export default App;
