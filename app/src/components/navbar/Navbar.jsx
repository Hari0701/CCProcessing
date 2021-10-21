import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
export default function Navbar() {
    return (
        <div>
            <nav className="navbar">
                <div>
                    <label className="logo">Shopie</label>
                    <input type="checkbox" id="check" />
                    <label for="check" class="hamberger-btn">
                        <i class="fas fa-bars"></i>
                    </label>
                </div>

                <ul className="navItems">
                    <li className="navItem">
                        <Link to="/" className="Link">
                            Home
                        </Link>
                    </li>
                    <li className="navItem">
                        <Link to="/products" className="Link">
                            Products
                        </Link>
                    </li>
                    <li className="navItem">
                        <Link to="/buy" className="Link">
                            Buy
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
