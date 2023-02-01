import React from "react";
import "./FourthSection.css";
import images4 from "../images/img4.jpg";
import images5 from "../images/img5.jpg";
import images6 from "../images/img6.jpg";

function FourthSection(){
    return(
        <div className="fourth_container">
            <h1>Some Services We <br/>Offer</h1>
            <div className="fourth_main">
                <div className="fourth_rectangle">
                    <h2>Payment Done</h2>
                    <img src={images4} alt="" className="fourth_image"/>
                    <p>Pay with a Visa or<br/>PayPal card and without<br/>much ado.</p>
                    <a href="#">Learn More</a>
                </div>
                <div className="fourth_rectangle">
                    <h2>Find Your Product</h2>
                    <img src={images5} alt="" className="fourth_image"/>
                    <p>We offer sale of<br/>products through the<br/>Internet.</p>
                    <a href="#">Learn More</a>
                </div>
                <div className="fourth_rectangle">
                    <h2>Product Received</h2>
                    <img src={images6} alt="" className="fourth_image"/>
                    <p>In our app you can see<br/>the delay time of your<br/>order.</p>
                    <a href="#">Learn More</a>
                </div>
            </div>
        </div>
    )
}

export default FourthSection;
