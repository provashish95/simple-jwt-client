import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Order = () => {
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {

        fetch('http://localhost:5000/orders', {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    navigate('/login');
                }
                return res.json()
            })
            .then(data => {
                console.log(data);
                setOrders(data)
            })

    }, []);



    return (
        <div>
            <h1>This is Orders page: {orders.length}</h1>
        </div>
    );
};

export default Order;