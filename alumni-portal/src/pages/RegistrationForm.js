import React, { useState } from 'react';
import './RegistrationForm.css'; // Import CSS for styling

function RegistrationForm() {
    const [formData, setFormData] = useState({
        prn: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const validateForm = () => {
        const newErrors = {};

        // Validate PRN
        if (!formData.prn) {
            newErrors.prn = 'PRN is required';
        } else if (!/^[0-9]{10}$/.test(formData.prn)) {
            newErrors.prn = 'PRN must be a 10-digit number';
        }

        // Validate First Name
        if (!formData.firstName.trim()) {
            newErrors.firstName = 'First name is required';
        } else if (!/^[a-zA-Z]+$/.test(formData.firstName.trim())) {
            newErrors.firstName = 'First name should contain only letters';
        }

        // Validate Last Name
        if (!formData.lastName.trim()) {
            newErrors.lastName = 'Last name is required';
        } else if (!/^[a-zA-Z]+$/.test(formData.lastName.trim())) {
            newErrors.lastName = 'Last name should contain only letters';
        }

        // Validate Email
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }

        // Validate Password
        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        } else if (!/[A-Z]/.test(formData.password)) {
            newErrors.password = 'Password must contain at least one uppercase letter';
        } else if (!/[a-z]/.test(formData.password)) {
            newErrors.password = 'Password must contain at least one lowercase letter';
        } else if (!/[0-9]/.test(formData.password)) {
            newErrors.password = 'Password must contain at least one number';
        } else if (!/[!@#$%^&*]/.test(formData.password)) {
            newErrors.password = 'Password must contain at least one special character';
        }

        // Validate Confirm Password
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            alert('Registration successful!');
            console.log(formData);
            // You can submit the data to a server here
        }
    };

    return (
        <div className="registration-form-container">
            <h2>Registration Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="prn">PRN (Permanent Registration Number):</label>
                    <input
                        type="text"
                        id="prn"
                        name="prn"
                        value={formData.prn}
                        onChange={handleChange}
                        placeholder="Enter your 10-digit PRN"
                    />
                    {errors.prn && <span className="error">{errors.prn}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="firstName">First Name:</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Enter your first name"
                    />
                    {errors.firstName && <span className="error">{errors.firstName}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Enter your last name"
                    />
                    {errors.lastName && <span className="error">{errors.lastName}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                    />
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                    />
                    {errors.password && <span className="error">{errors.password}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="Confirm your password"
                    />
                    {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
                </div>

                <button type="submit" className="submit-btn">Register</button>
            </form>
        </div>
    );
}

export default RegistrationForm;
