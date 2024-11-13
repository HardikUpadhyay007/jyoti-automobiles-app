import React from "react";
import "./Hero.css";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import pic1 from "../Assets/pic1.png";
const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-left">
                <h1>NEW IN TOWN</h1>
                <div>
                    <div className="hand-hand-icon">
                        <p>JYOTI</p>
                        <img src={hand_icon} alt=""></img>
                    </div>
                    <p>AUTOMOBILES</p>
                    <p style={{ fontSize: "30px" }}>
                        everything your ride needs
                    </p>
                </div>
                <div className="hero-latest-btn">
                    <div>Latest Collections</div>
                    <img src={arrow_icon} alt="" />
                </div>
            </div>
            <div className="hero-right">
                <img src={pic1} alt="" />
            </div>
        </div>
    );
};

export default Hero;
