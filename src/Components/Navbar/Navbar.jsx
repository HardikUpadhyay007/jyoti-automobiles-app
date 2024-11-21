import React, { useContext, useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const { getTotalCartItems } = useContext(ShopContext);
    return (
        <div className="navbar ">
            <div className="nav-logo">
                <img src={logo}></img>
                <p>JYOTI AUTOMOBILES</p>
            </div>
            <ul className="nav-menu">
                <li
                    onClick={() => {
                        setMenu("shop");
                    }}
                >
                    <Link to="/" style={{ textDecoration: "none" }}>
                        HOME
                    </Link>
                    {menu === "shop" ? <hr /> : <></>}
                </li>
                <li
                    onClick={() => {
                        setMenu("parts");
                    }}
                >
                    <Link to="/parts" style={{ textDecoration: "none" }}>
                        AUTOPARTS
                    </Link>
                    {menu === "parts" ? <hr /> : <></>}
                </li>
                <li
                    onClick={() => {
                        setMenu("services");
                    }}
                >
                    <Link to="/services" style={{ textDecoration: "none" }}>
                        SERVICES
                    </Link>
                    {menu === "services" ? <hr /> : <></>}
                </li>
                <li
                    onClick={() => {
                        setMenu("kids");
                    }}
                >
                    {/* <Link to="/contact" style={{ textDecoration: "none" }}>
                        CONTACT
                    </Link>
                    {menu === "kids" ? <hr /> : <></>} */}
                </li>
            </ul>
            <div className="nav-login-cart">
                <Link to="/login">
                    <button>Login</button>
                </Link>
                <Link to="/cart">
                    <img src={cart_icon} alt="cart-logo"></img>
                </Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    );
};

export default Navbar;
