import React, { useState,useEffect } from 'react';
import './Orders.css';
import axios from 'axios'
import { Link,useNavigate} from 'react-router-dom';

function Orders() {
    
    const[orders,setOrders] = useState([])
    const navigate = useNavigate();

    useEffect(() =>{
        axios.get('http://localhost:8081/shoporders')
        .then(res=>{
            setOrders(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[]);

    const handleEdit = (id) => {
      navigate(`/edit/${id}`);
    };

    const handleDelete = async(id) => {
      try{
        await axios.delete(`http://localhost:8081/shoporders/${id}`);
        setOrders(orders.filter((shop) => shop.id != id));
      }catch(error){
        console.log("Error deleting shop:",error);
      }
    };
  return (
    <div className='crud'>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>PRODUCT</th>
            <th>TOTAL</th>
            <th>CUSTOMER_ID</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.product}</td>
              <td>{order.total}</td>
              <td>{order.customer_id}</td>
              <td>
                <Link to='/addorder'><button className='add' >Add</button> </Link> 
                <Link to='/updateorder'><button className='edit' >Update</button></Link>
                <Link to='/deleteorder'><button className='delete' >Delete</button></Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Orders;
