import React from "react";
import "./Footer.css";


function Footer(){
    return(
        <div className="footer_container">
            <div className="footer_nav">
                <div className="footer_first">
                    <h1>Delivery</h1>
                    <p>Order Products Faster<br/>Easier</p>
                </div>
                <div className="footer_second">
                    <h1>Our Services</h1>
                    <ul>
                        <li><a href="#pricing">Pricing</a></li>
                        <li><a href="#discounts">Discounts</a></li>
                        <li><a href="#report">Report a bug</a></li>
                        <li><a href="#terms">Terms of Service</a></li>
                    </ul>
                </div>
                <div className="footer_third">
                    <h1>Our Company</h1>
                    <ul>
                        <li><a href="#blog">Blog</a></li>
                        <li><a href="#mission">Our mission</a></li>
                        <li><a href="#touch">Get in touch</a></li>
                    </ul>
                </div>
            </div>
            <div className="copy">Emre. All rights reserved.</div>
        </div>
    )
}

export default Footer;