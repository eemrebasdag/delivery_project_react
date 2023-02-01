import React from "react";
import "./ThirdSection.css";
import image2 from "../images/img2.jpg"
import image3 from "../images/img3.jpg"


function ThirdSection(){
    return(
        <div className="third_container">
            <div className="third_main">
                <div className="row_first">
                    <img src={image2} alt="" className="third_image"/>
                    <div className="rFirst_txt">
                        <h1>Find Out a Little More<br/>About Us</h1>
                        <p>We are a company dedicated to the distribution <br/>of products by delivery to your home or to the<br/>place where you are, with the best quality of<br/>delivery</p>
                    </div>
                </div>  
                <div className="row_second">
                    <img src={image3} alt="" className="third_image"/>
                    <div className="rSecond_txt">
                        <h1>Your Safety Is<br/>Important</h1>
                        <p>When your order reaches you, we have the<br/>health safety protocols, so that you are<br/>protected from any disease. Watch the video of<br/>how the delivery is made.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThirdSection;