import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported
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
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
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
                <div className="ms-lg-3 d-flex align-items-center auth-buttons">
                    <button className="btn btn-outline-primary signup-btn" onClick={swalPopup}>Sign Up</button>
                    <button className="btn btn-primary login-btn ms-2" onClick={swalPopup}>Log In</button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
