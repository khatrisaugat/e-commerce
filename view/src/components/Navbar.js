import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="Navbar">
            <a className="logo" href="#"> Harsh</a>
            <ul className="nav">
                <li><a className="nav-link" href="#home" onMouseEnter={() => { }}>Categories</a></li>
                <li><a className="nav-link" href="#about">Recommended Products</a></li>
                <li><a className="nav-link" href="#portfolio">Contacts</a></li>
                <li><a className="nav-link" href="#services">Service</a></li>
                <li><a className="nav-link" href="#contact">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar
