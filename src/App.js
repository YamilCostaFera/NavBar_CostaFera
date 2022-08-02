import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <div class="App">
      <NavBar/>
      <ItemListContainer greeting="Torta Oreo" />
    </div>

  )
}

export default App;
