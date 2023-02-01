import React from "react";
import "./SecondSection.css";
import img1 from "../images/img1.jpg";

function SecondSection() {
    return (
        <div className="second_container">
            <div className="second_main">
                <div className="second_txt">
                    <h1>Other Products<br />Faster Easier</h1>
                    <p>Order your favorite foods at any time <br />and we will deliver them right to where <br />you are</p>
                    <button className="btn">Get Started</button>
                </div>
                <div className="second_img">
                    <img src={img1} alt="" className="img" />
                </div>
            </div>
        </div>

    )
}

export default SecondSection;