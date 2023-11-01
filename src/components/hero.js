import React from "react"
import image from "../img/purpleCoder.jpg"

export default function Hero(){
    return( 
        <div>
            <div className="maincontent">
                <div className="main-text">
                    <div className="text1">
                        <h1>I make <span>Playful</span><br/>Experineces</h1>
                    </div>
                    <div className="text2">
                        <h3>Ritesh Yadav /FrontEnd Developer</h3>
                    </div>
                </div>
                <div>
                    <img src = {image} className="main-image" />
                </div>
            </div>
            {/* <div className="prodown">
                <h3 className="project">Project</h3>
                <i class='bx bxs-chevron-down' id="down"></i>
            </div> */}
                <div class="prodown">
                    <div class="pro"><h4>Projects</h4></div>
                    <div class="down1">
                    <i class='bx bxs-chevron-down' id="down"></i>
                </div>
            </div>
        </div>
    )
}