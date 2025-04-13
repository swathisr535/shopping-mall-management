import React, { useState } from 'react';
import axios from 'axios';
import './AddOrder.css'

function DeleteOrder() {
    const [id, setId] = useState("");
    const [product, setProduct] = useState("");
    const [total, setTotal] = useState("");
    const [customer_id, setCustomer_Id] = useState("");
    const [response, setResponse] = useState("");

    // Fetch order details by ID
    const fetchOrder = () => {
        if (!id) {
            alert("Please enter an ID to fetch order details.");
            return;
        }

        axios.get(`http://localhost:8081/shoporders/${id}`)
            .then(res => {
                const order = res.data;
                setProduct(order.product);
                setTotal(order.total);
                setCustomer_Id(order.customer_id);
                setResponse("");  // Clear any previous response
            })
            .catch(err => {
                console.log(err);
                setResponse(`Error fetching order: ${err.message}`);
                setProduct("");
                setTotal("");
                setCustomer_Id("");
            });
    };

    // Delete order by ID
    const handleDelete = (e) => {
        e.preventDefault();  // Prevent page refresh

        if (!id) {
            alert("Please provide an ID to delete an order.");
            return;
        }

        axios.delete(`http://localhost:8081/shoporders/${id}`)
            .then(res => {
                console.log(res);
                setResponse(`Order with ID ${id} deleted successfully!`);
                // Reset form fields after deletion
                setId("");
                setProduct("");
                setTotal("");
                setCustomer_Id("");
            })
            .catch(err => {
                console.log(err);
                setResponse(`Error deleting order: ${err.message}`);
            });
    };

    return (
        <div>
            <h2>Delete Order</h2>
            <form onSubmit={handleDelete}>
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
                    <button type='button' onClick={fetchOrder}>Fetch Order</button>
                </div>
                <div>
                    <label>Product:</label>
                    <input 
                        type='text' 
                        name='product' 
                        value={product} 
                        placeholder="Product"
                        disabled
                    />
                </div>
                <div>
                    <label>Total:</label>
                    <input 
                        type='number' 
                        name='total' 
                        value={total} 
                        placeholder="Total"
                        disabled
                    />
                </div>
                <div>
                    <label>Customer ID:</label>
                    <input 
                        type='number' 
                        name='customer_id' 
                        value={customer_id} 
                        placeholder="Customer ID"
                        disabled
                    />
                </div>
                <button type='submit'>Delete Order</button>
            </form>
            {response && <p>{response}</p>} {/* Display response message */}
        </div>
    );
}

export default DeleteOrder;
