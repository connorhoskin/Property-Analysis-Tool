// src/PropertiesList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function PropertiesList() {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/properties/')  // Adjust to your Django API URL
            .then(response => response.json())
            .then(data => setProperties(data))
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <div>
            <h1>All Properties</h1>
            <ul>
                {properties.map(property => (
                    <li key={property.id}>
                        <strong>{property.address}</strong> - Purchase Price: ${property.purchase_price} - Expected Rent: ${property.expected_rent}
                    </li>
                ))}
            </ul>
            <Link to="/">Back to Home</Link>
            <Link to="/properties/new">Add a New Property</Link>
        </div>
    );
}

export default PropertiesList;
