import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import "../css/Navbar.css";
import "../css/Avenir.css";
import '../css/Media-Query.css';

function Navbar() {
    const [navbar, setNavbar] = useState(false);

    const swalPopup = () => {
        Swal.fire({
            title: "Coming Soon...",
            text: "Stay tuned!",
            icon: "info"
        });
    }

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", changeBackground);

        return () => {
            window.removeEventListener("scroll", changeBackground);
        };
    }, []);

    return (
        <nav className={`navbar navbar-expand-lg ${navbar ? 'active' : ''}`}>
    <Link className="navbar-brand logo" to="/">AnimeBinge</Link>

    {/* Desktop Navbar */}
    <div className="d-none d-lg-flex flex-grow-1">
        <ul className="navbar-nav ms-auto nav-links">
            <li className="nav-item">
                <Link className="nav-link" to="/home">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/services">Discover</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/about">About Us</Link>
            </li>
        </ul>
        <div className="d-flex ms-lg-3 align-items-center auth-buttons">
            <button className="signup-btn" onClick={swalPopup}>Sign Up</button>
            <button className="login-btn" onClick={swalPopup}>Log In</button>
        </div>
    </div>

    {/* Mobile Navbar Toggle Button */}
    <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>

    {/* Offcanvas Menu for Mobile */}
    <div className="offcanvas offcanvas-end d-lg-none" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" data-bs-theme="dark">
        <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">AnimeBinge</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
            <ul className="navbar-nav ms-auto nav-links">
                <li className="nav-item">
                    <Link className="nav-link" to="/home">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/services">Discover</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about">About Us</Link>
                </li>
            </ul>
            <div className="d-flex flex-column align-items-center auth-buttons">
                <button className="btn signup-btn" onClick={swalPopup}>Sign Up</button>
                <button className="btn login-btn" onClick={swalPopup}>Log In</button>
            </div>
        </div>
    </div>
</nav>

    );
}

export default Navbar;
