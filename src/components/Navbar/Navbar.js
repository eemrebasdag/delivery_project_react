import React from "react";
import "./Navbar.css";


function Navbar(){
    return(
        <div className="nav-main">
            <div className="container">
                
                <a href="#home" className="logo">Delivery</a>

                <ul className="navbar_list">
                    <li className="navbar_items"><a href="#home" className="navbar_txt">Home</a></li>
                    <li className="navbar_items"><a href="#about" className="navbar_txt">About Us</a></li>
                    <li className="navbar_items"><a href="#services" className="navbar_txt">Services</a></li>
                    <li className="navbar_items"><a href="#contact" className="navbar_txt">Contact Us</a></li>
                    <li className="navbar_items"><a href="#order" className="navbar_button">Order Now!</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;