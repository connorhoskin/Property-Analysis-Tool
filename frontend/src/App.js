// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import PropertiesList from './PropertiesList';
import NewProperty from './NewProperty';
import Tester   from './Tester';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/properties" element={<PropertiesList />} />
                <Route path="/properties/new" element={<NewProperty />} />
                <Route path="/properties/tester" element={<Tester />} />
            </Routes>
        </Router>
    );
}

export default App;
