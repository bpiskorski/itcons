import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"
import "./MobileServices"
import "./Pricing"
import "./AboutUs"

const Navbar = () => {
    return (
        <nav>

            <header>

                <h1>IT Solutions</h1>
                <nav>

                    <h2><Link to="/">Home</Link></h2>
                    <h2><Link to="/mobile-services">Mobile Services</Link></h2>
                    <h2><Link to="/pricing">Pricing</Link></h2>
                    <h2><Link to="/aboutus">About us</Link></h2>


                </nav>
            </header>

        </nav>
    );
};

export default Navbar;