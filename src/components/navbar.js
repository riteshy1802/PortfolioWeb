import React from "react"
import logo from "../img/logo.png"

export default function Navbar() {
    return(
        <nav>
            <img src = {logo} className="mainlogo" />
            <div className="links">
                <a href="https://drive.google.com/file/d/1EjK-qb6OEGxtlWl2tvPNVAt7874DBHsY/view?usp=sharing" className="resume" id="resume" target="blank">Resume</a>
                <a href="https://github.com/riteshy1802" target="blank" ><i class="bx bxl-github" id="git" /></a>
                <a href="https://www.linkedin.com/in/ritesh-yadav-2a5a03289/" target="blank" ><i class="bx bxl-linkedin-square" id="lin" /></a>
            </div>
        </nav>
    )
}