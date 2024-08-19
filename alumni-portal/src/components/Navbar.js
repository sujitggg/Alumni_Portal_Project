import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file

function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/alumnidata">AlumniData</Link></li>
                <li><Link to="/eventlist">EventList</Link></li>
                <li><Link to="/news">News</Link></li>
                <li><Link to="/departments">Departments</Link></li>
                <li><Link to="/registrationform">RegistrationForm</Link></li>
                <li><Link to="/userprofile">UserProfile</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>

            </ul>
        </nav>
    );
}

export default Navbar;
