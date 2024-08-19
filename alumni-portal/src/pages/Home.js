import React from 'react';
import './Home.css'; // Import the CSS file for styling
import CollegeImage from './College-image.jpg'; // Adjust the path if necessary

function Home() {
    return (
        <div className="home-container">
            <div className="welcome-section">
                <h1>Welcome to the Alumni Portal</h1>
                <p>Connect with former classmates, stay updated on events, and explore the community of our alumni network.</p>
            </div>
            <div className="college-photo-section">
                <img 
                    src={CollegeImage} 
                    alt="College" 
                    className="college-photo" 
                />
            </div>
            <div className="overview-section">
                <h2>About the Alumni Portal</h2>
                <p>
                    The Alumni Portal is a dedicated platform designed to keep you connected with your alma mater and fellow graduates. 
                    Here, you can access the latest news, participate in upcoming events, and explore opportunities to contribute to the college community. 
                    Whether you're looking to network, give back, or simply stay informed, the Alumni Portal offers a wide range of resources to support your journey.
                </p>
            </div>
        </div>
    );
}

export default Home;
