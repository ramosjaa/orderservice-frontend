let host = "http://localhost:8081"

let findAllOrders = () => {
    return fetch(host + '/orders').then(x => x.json());


};

let saveOrder = (order) => {
    return fetch(host + "/orders", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            orderId: order.orderId,
            customerId: order.customerId,
            total: order.total,
            shippingAddress: order.shippingAddress,
            payment: order.payment,
            items: order.items
        })
    }).then(response => {
        if(response.status == 200 || response.status == 201) return response.json();
        return null;
    }).then(id => id)
        .catch(error => {
            console.log(error);
            return null;
        });
}

let data = {
    orders: findAllOrders,
    saveOrder: saveOrder
};

export default data;