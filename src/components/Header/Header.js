import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <div className="banner-container ">
            <div className="">
                <div className="row d-flex banner align-items-center justify-content-center">
                    <div className="header">
                        <nav>
                            <Link to="/home">Home</Link>
                            <Link to="/about">About</Link>
                            <Link to="/services">Services</Link>
                            <Link to="/contactUs">Contact Us</Link>
                        </nav>
                    </div>
                    <div className="col-md-6">

                        <h1 className="title">
                            Welcome to <br /> <span className="care">Mahmud Academic Care</span>
                        </h1>
                        <p className="text-white text-center mt-3">
                            Education Needs Complete Solution
                        </p>


                    </div>
                    <div className="col-md-6"></div>
                </div>
            </div>
        </div>
    );
};

export default Header;