import React from 'react';
import './Header.css';
import bg from "../../images/bg.jpg"

export default function Header() {
    return <div className="header" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.100),rgba(0,0,0,0.200)),url(${bg})`}}>
        <div className="navbar">
            <h1>Shopie</h1>
                <ul>
                    <li>Products</li> 
                    <li>Buy</li> 
                </ul>
        </div>
    
    </div>
}
