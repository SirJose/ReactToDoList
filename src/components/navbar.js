import React from "react";
import logo from '../logo.svg';
// import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-secondary bg-gradient">
            <div className="container-fluid">
                <a href="/" className="navbar-brand">
                    <img src={logo} alt="ToDo List Logo" height="42px"/>
                    To-Do List
                </a>
            </div>
        </nav>
    );
}

export default Navbar;