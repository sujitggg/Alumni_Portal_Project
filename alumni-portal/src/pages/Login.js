import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'; // Import the CSS file for styling

function Login() {
    return (
        <div className="login-container">
            <div className="login-box">
                <h1>User Login</h1>
                <form>
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                    <button type="submit" className="login-button">Login</button>
                </form>
                <div className="login-options">
                    <Link to="/forgot-password" className="forgot-password">Forgot Password?</Link>
                    <Link to="/register" className="register-link">Register Here</Link>
                </div>
            </div>
        </div>
    );
}

export default Login;
