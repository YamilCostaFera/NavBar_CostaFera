import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
// import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetails/ItemDetailsContainer';


function App() {
  return (
    <div class="App">
      <NavBar/>
      {/* <ItemListContainer greeting="Torta Oreo" /> */}
      <ItemDetailContainer />
    </div>

  )
}

export default App;
