let customers = [ // table
    {
        firstName: "John",
        lastName: "Smith",
        age: 32
    }, {
        firstName: "Julie",
        lastName: "Walters",
        age: 44
    }
];

let products = [ // table
    {
        type: "book",
        cost: 5,
    }, {
        type: "magazine",
        cost: 1
    }
];

let orders = [ // table
    {
        orderNumber: 1,
        buyer: customers[0],
        product: products[1]
    }, {
        orderNumber: 2,
        buyer: customers[1],
        product: products[0]
    }, {
        orderNumber: 3,
        buyer: customers[1],
        product: products[0]
    }
];

for (let i = 0; i < orders.length; i++) { // select ORDER-BUYER where ORDER-NUMBER is 1
    if (orders[i].orderNumber === 1) {
        console.log(orders[i].buyer);
    };
};

for (let i = 0; i < orders.length; i++) { // select ORDER-PRODUCTS from ORDERS where ORDER-BUYER is "JULIE"
    if (orders[i].buyer.firstName === "Julie") {
        console.log(orders[i].product);
    };
};