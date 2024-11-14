// src/App.js
import React from 'react';
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import PropertiesList from './Components/PropertiesList';
import NewProperty from './Components/NewProperty';
import Tester   from './Components/Tester';
import NavBar   from './Components/NavBar';

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;


