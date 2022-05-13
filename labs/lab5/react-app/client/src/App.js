import React, { Component } from 'react';

import logo from './loogo.png';

import './App.css';
import Home from "./content/Home";
import AddPlayers from './content/AddPlayers';
import ViewPlayers from './content/ViewPlayers';  
import UpdatePlayers from "./content/UpdatePlayers";

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          New App!
        </p>
        <Routes>
          <Route index element={<Home/>}/>  
          <Route path="api/data">
            <Route index element={<ViewPlayers/>} />
            <Route path="new" element={<AddPlayers />} />
            <Route path="post" >
              <Route path=":id" element={<UpdatePlayers/>} />
              </Route>
          </Route>
        </Routes>
        
      </header>
    </div>
  );
}

export default App;
