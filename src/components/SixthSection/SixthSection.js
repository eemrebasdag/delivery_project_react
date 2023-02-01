import React from "react";
import "./SixthSection.css";


function SixthSection(){
    return(
        <div className="sixth_container">
            <div className="sixth_main">
                <div className="contact">
                    <h1>Contact Us From<br/>Here</h1>
                    <p>You can contact us from here, you can<br/>write to us, call us or visit our service <br/>center, we will gladly assist you.</p>
                </div>
                <div className="info">
                    <p className="info_text"><span className="info_type">Telephone:</span> 999 - 888 - 777</p>
                    <p className="info_text"><span className="info_type">Email:</span> delivery@email.com</p>
                    <p className="info_text"><span className="info_type">Location:</span> Lima - Peru</p>
                </div>
                <div>
                    <button className="button">Contact Us</button>
                </div>
            </div>
        </div>
    )
}

export default SixthSection;