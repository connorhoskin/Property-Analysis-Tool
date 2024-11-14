// src/NewProperty.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NewProperty() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        address: '',
        purchase_price: '',
        expected_rent: '',
        description: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://127.0.0.1:8000/properties/new/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Property created:', data);
            navigate('/properties');  // Redirect to properties list
        })
        .catch(error => console.error('Error:', error));
    };

    return (
        <div>
            <h1>Add a New Property</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Address:
                    <input type="text" name="address" value={formData.address} onChange={handleChange} required />
                </label><br />
                <label>
                    Purchase Price:
                    <input type="number" name="purchase_price" value={formData.purchase_price} onChange={handleChange} required />
                </label><br />
                <label>
                    Expected Rent:
                    <input type="number" name="expected_rent" value={formData.expected_rent} onChange={handleChange} required />
                </label><br />
                <label>
                    Description:
                    <textarea name="description" value={formData.description} onChange={handleChange}></textarea>
                </label><br />
                <button type="submit">Add Property</button>
            </form>
            <button onClick={() => navigate('/properties')}>Back to Properties List</button>
        </div>
    );
}

export default NewProperty;
