
import { useState, useEffect } from 'react';
import data from "../../data/data.js";

const Orders = () =>{
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        data.orders()
            .then((data) => {
                setOrders(data);
                setLoading(false);
                console.log(data);
            })
            .catch((e) => console.log(e));
    }, []);
    return(
        <>
            <table>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Customer ID</th>
                        <th>Total</th>
                        <th>Shipping Address</th>
                        <th>Payment</th>
                        <th>Items</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((c, i) => (
                        <tr key={i}>
                            <td data-label="Order ID">{c.orderId}</td>
                            <td data-label="Customer ID">{c.customerId}</td>
                            <td data-label="Total">{c.total}</td>
                            <td data-label="Shipping Address">{c.shippingAddress}</td>
                            <td data-label="Payment">{c.payment}</td>
                            <td data-label="Items">{c.items}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default Orders;