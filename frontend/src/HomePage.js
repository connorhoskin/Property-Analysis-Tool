// src/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div>
            <h1>Welcome to the Property Management System</h1>
            <p>Use the links below to navigate:</p>
            <ul>
                <li><Link to="/properties">View Properties</Link></li>
                <li><Link to="/properties/new">Add New Property</Link></li>
                <li><Link to="/properties/Tester">Tester</Link></li>
            </ul>
        </div>
    );
}

export default HomePage;
