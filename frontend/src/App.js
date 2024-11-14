import React, { useEffect, useState } from 'react';

function App() {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/properties/')  // Your Django API endpoint
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setProperties(data);
            })
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <div>
            <h1>Properties List</h1>
            <ul>
                {properties.map(property => (
                    <li key={property.id}>
                        <strong>{property.address}</strong> - Purchase Price: ${property.purchase_price} - Expected Rent: ${property.expected_rent}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
