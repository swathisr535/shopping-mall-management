import React, { useState } from 'react';
import axios from 'axios';
import './AddOrder.css';


function AddOrder() {
    // State hooks for form inputs
    const [id, setId] = useState("");
    const [product, setProduct] = useState("");
    const [total, setTotal] = useState("");
    const [customer_id, setCustomer_Id] = useState("");
    const [message, setMessage] = useState(""); // For success/error messages

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();  // Prevent default form submission

        // Create an object with form data
        const orderData = {
            id: id,
            product: product,
            total: parseFloat(total), // Ensure total is a number
            customer_id: parseInt(customer_id, 10) // Ensure customer_id is a number
        };

        try {
            // POST request to add the new order
            const response = await axios.post('http://localhost:8081/shoporders', orderData);
            console.log(response);
            setMessage("Order added successfully!");
            
            // Reset form fields after successful submission
            setId("");
            setProduct("");
            setTotal("");
            setCustomer_Id("");
        } catch (error) {
            console.error("There was an error adding the order!", error);
            setMessage("Failed to add order. Please try again.");
        }
    };

    return (
        <div className="AddOrder-container">
            <h2>Add New Order</h2>
            <form onSubmit={handleSubmit}> {/* Attach handleSubmit to the form */}
                <div>
                    <label>Order ID:</label>
                    <input 
                        type='number' 
                        name='id' 
                        value={id} 
                        onChange={(e) => setId(e.target.value)} 
                        placeholder="Order ID" 
                        required
                    />
                </div>
                <div>
                    <label>Product:</label>
                    <input 
                        type='text' 
                        name='product' 
                        value={product} 
                        onChange={(e) => setProduct(e.target.value)} 
                        placeholder="Product" 
                        required
                    />
                </div>
                <div>
                    <label>Total:</label>
                    <input 
                        type='number' 
                        name='total' 
                        value={total} 
                        onChange={(e) => setTotal(e.target.value)} 
                        placeholder="Total" 
                        required
                    />
                </div>
                <div>
                    <label>Customer ID:</label>
                    <input 
                        type='number' 
                        name='customer_id' 
                        value={customer_id} 
                        onChange={(e) => setCustomer_Id(e.target.value)} 
                        placeholder="Customer ID" 
                        required
                    />
                </div>
                <button type='submit'>Submit</button> {/* Button triggers form submission */}
            </form>
            
            {/* Display success or error message */}
            {message && <p>{message}</p>}
        </div>
    );
}

export default AddOrder;
