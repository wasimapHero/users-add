import React from 'react';

const Cart = (props) => {
    console.log(props.cart);
    var a = props.cart;
    console.log(a);
    const total = a.reduce((total, each)=>total+each.id*1000, 0);
    
    return (
        <div>
            <h1>Added friends count--:{a.length}</h1>
            <p>Total Annual Salary: {total}</p>
        </div>
    );
};

export default Cart;