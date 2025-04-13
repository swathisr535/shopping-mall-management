import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AddOrder.css'

function UpdateOrder() {
    const [id, setId] = useState("");
    const [product, setProduct] = useState("");
    const [total, setTotal] = useState("");
    const [customer_id, setCustomer_Id] = useState("");
    const [message, setMessage] = useState("");

    // Function to handle fetching the existing order details
    const fetchOrderDetails = () => {
        if (id) {
            axios.get(`http://localhost:8081/shoporders/${id}`)
                .then(res => {
                    const order = res.data;
                    setProduct(order.product);
                    setTotal(order.total);
                    setCustomer_Id(order.customer_id);
                })
                .catch(err => {
                    console.error(err);
                    setMessage("Order not found or unable to fetch order details.");
                });
        }
    };

    useEffect(() => {
        fetchOrderDetails(); // Fetch order details when the component mounts or id changes
    }, [id]);

    // Handle the update submission
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const updatedOrder = {
            id: id,
            product: product,
            total: total,
            customer_id: customer_id,
        };

        axios.put(`http://localhost:8081/shoporders/${id}`, updatedOrder)
            .then(res => {
                setMessage("Order updated successfully!");
                console.log(res.data);
            })
            .catch(err => {
                console.error(err);
                setMessage("Failed to update order.");
            });
    };

    return (
        <div className="update-order-container">
            <div className="update-order-form">
                <h2>Update Order</h2>
                {message && <p>{message}</p>}
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Order ID:</label>
                        <input 
                            type='number' 
                            value={id} 
                            onChange={(e) => setId(e.target.value)} 
                            placeholder="Enter Order ID"
                        />
                    </div>
                    <div>
                        <label>Product:</label>
                        <input 
                            type='text' 
                            value={product} 
                            onChange={(e) => setProduct(e.target.value)} 
                            placeholder="Product Name"
                        />
                    </div>
                    <div>
                        <label>Total:</label>
                        <input 
                            type='number' 
                            value={total} 
                            onChange={(e) => setTotal(e.target.value)} 
                            placeholder="Total Amount"
                        />
                    </div>
                    <div>
                        <label>Customer ID:</label>
                        <input 
                            type='number' 
                            value={customer_id} 
                            onChange={(e) => setCustomer_Id(e.target.value)} 
                            placeholder="Customer ID"
                        />
                    </div>
                    <button type='submit'>Update Order</button>
                </form>
            </div>
        </div>
    );
    
}

export default UpdateOrder;
