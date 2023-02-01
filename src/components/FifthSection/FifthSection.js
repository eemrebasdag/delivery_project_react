import React from "react";
import "./FifthSection.css";
import images7 from "../images/img7.png";


function FifthSection(){
    return(
        <div className="fifth_container">
            <div className="fifth_main">
                <div className="fifth_img_container">
                    <img src={images7} alt="" className="fifth_img"/>
                </div>
                <div className="fifth_txt">
                    <h2>Watch Your Delivery<br/>At Any Time</h2>
                    <p>With our app you can view the route of your<br/>order, from our local headquarters to the place<br/>where you are. Look for the app now!</p>
                    <div className="fifth_buttons">
                        <button className="fifth_btn"><i class="fa-brands fa-apple"></i>App Store</button>
                        <button className="fifth_btn"><i class="fa-brands fa-google-play"></i>Google Play</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FifthSection;
