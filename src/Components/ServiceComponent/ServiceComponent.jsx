import React from "react";
import "./ServiceComponent.css";
import mechanic from "../Assets/mechanical.png";
import protection from "../Assets/protection.png";
import carrepair from "../Assets/car-repair.png";
const ServiceComponent = () => {
    return (
        <div>
            <div className="wrapper">
                <div className="product-img">
                    <img
                        src={carrepair}
                        height="300"
                        width="300"
                        alt="Product"
                    />
                </div>
                <div className="product-info">
                    <div className="product-text">
                        <h1>Car Maintanence</h1>
                        <p>
                            Keep your vehicle running smoothly with our best car
                            maintenance services. Our skilled technicians are
                            equipped to handle everything from routine oil
                            changes to complex engine diagnostics, ensuring
                            optimal performance of your car.
                        </p>
                    </div>
                    <div className="product-price-btn">
                        <button type="button">buy now</button>
                    </div>
                </div>
            </div>
            <div className="wrapper">
                <div className="product-img">
                    <img
                        src={protection}
                        height="300"
                        width="300"
                        alt="Product"
                    />
                </div>
                <div className="product-info">
                    <div className="product-text">
                        <h1>Car Protection</h1>
                        <p>
                            Shield your vehicle with our comprehensive car
                            protection services. From advanced security systems
                            to durable coatings, we offer a range of solutions
                            to keep your car safe from the elements and
                            potential threats.
                        </p>
                    </div>
                    <div className="product-price-btn">
                        <button type="button">buy now</button>
                    </div>
                </div>
            </div>
            <div className="wrapper">
                <div className="product-img">
                    <img
                        src={mechanic}
                        height="300"
                        width="300"
                        alt="Product"
                    />
                </div>
                <div className="product-info">
                    <div className="product-text">
                        <h1>Car Repair</h1>
                        <p>
                            Turning car troubles into road-ready triumphs, our
                            expert team is dedicated to providing top-notch
                            repairs that ensure your vehicle runs smoothly and
                            safely.
                        </p>
                    </div>
                    <div className="product-price-btn">
                        <button type="button">buy now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceComponent;
