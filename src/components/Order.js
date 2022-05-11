import React, { useEffect, useState } from 'react';

const Order = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/orders', {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setOrders(data)
            })

    }, []);

    console.log(orders);

    return (
        <div>
            <h1>This is Orders page: {orders.length}</h1>
        </div>
    );
};

export default Order;