import React from 'react';
import './UsersInfo.css';
//import img from '../../img.JPG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
const UsersInfo = (props) => {
    console.log(props.dt);
    
    const {name, address, email, website, company, phone} = props.dt;
    console.log(name);
    
    return (
        
        <div className="users-body">
            <div>
                <img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt=""/>
            </div>
            <div>
                <span className="name">{name}</span>
                <p className="info">
                    email: {email} <br/>
                    phone: {phone} <br/>
                    website: {website} <br/>
                    company: {company.name} <br/>
                    city: {address.city}
                </p>
                <button onClick={()=>props.addHandler(props.dt)}>  Add to Friend  <FontAwesomeIcon icon={faPlus} color="white" /></button>
            </div>
        </div>
    );
};

export default UsersInfo;