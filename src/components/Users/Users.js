import React, { useState } from 'react';
import './Users.css';
import UsersInfo from '../UsersInfo/UsersInfo';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';


const Users = () => {
    
    console.log(fakeData);
    const data = fakeData;
    console.log(data);
    //
    const [cart, setCart] = useState([])
    const addHandler = (eachObject) =>{
        const newCart = [...cart,eachObject];
        setCart(newCart);
    }
    console.log(cart);
    
    return (
        <div className="div-display">
            <div className="users-info">
                {
                    data.map(each => <UsersInfo dt={each} addHandler={addHandler}></UsersInfo>)
                }
            </div>
            <div>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Users;