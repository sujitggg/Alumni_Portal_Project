import React, { useState } from 'react';
import './UserProfile.css'; // Import CSS for styling

function UserProfile() {
    const [prn, setPrn] = useState('');
    const [userDetails, setUserDetails] = useState(null);
    const [error, setError] = useState('');

    const handleSearch = () => {
        // Simulate fetching user details based on PRN
        const mockDatabase = {
            '123456': {
                name: 'John Doe',
                prn: '123456',
                email: 'john.doe@example.com',
                designation: 'Software Engineer',
                department: 'Computer Science',
                graduationYear: 2020,
            },
            '654321': {
                name: 'Jane Smith',
                prn: '654321',
                email: 'jane.smith@example.com',
                designation: 'Data Analyst',
                department: 'Information Technology',
                graduationYear: 2019,
            },
        };

        if (mockDatabase[prn]) {
            setUserDetails(mockDatabase[prn]);
            setError('');
        } else {
            setUserDetails(null);
            setError('User not found. Please check the PRN and try again.');
        }
    };

    return (
        <div className="user-profile-container">
            <h1>User Profile</h1>
            <div className="search-section">
                <input
                    type="text"
                    value={prn}
                    onChange={(e) => setPrn(e.target.value)}
                    placeholder="Enter your PRN"
                    className="prn-input"
                />
                <button onClick={handleSearch} className="search-button">Search</button>
            </div>

            {error && <p className="error-message">{error}</p>}

            {userDetails && (
                <div className="user-details">
                    <h2>{userDetails.name}</h2>
                    <p><strong>PRN:</strong> {userDetails.prn}</p>
                    <p><strong>Email:</strong> {userDetails.email}</p>
                    <p><strong>Designation:</strong> {userDetails.designation}</p>
                    <p><strong>Department:</strong> {userDetails.department}</p>
                    <p><strong>Graduation Year:</strong> {userDetails.graduationYear}</p>
                </div>
            )}
        </div>
    );
}

export default UserProfile;
