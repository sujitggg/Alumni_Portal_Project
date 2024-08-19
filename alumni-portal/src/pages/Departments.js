import React from 'react';
import './Departments.css'; // Import the CSS file for styling

function Departments() {
    return (
        <div className="departments-container">
            <h1>Connect with YCP Mumbai</h1>
            <p>Stay updated with the latest news and events by following us on our social media platforms. Connect with us to engage with the YCP Mumbai community and stay informed about what's happening at the center.</p>

            <div className="social-media-section">
                <h2>Follow Us</h2>
                <div className="social-media-links">
                    <a href="https://www.facebook.com/ycpMumbai" target="_blank" rel="noopener noreferrer">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" />
                        <span>Facebook</span>
                    </a>
                    <a href="https://twitter.com/ycpMumbai" target="_blank" rel="noopener noreferrer">
                        <img src="https://upload.wikimedia.org/wikipedia/en/6/60/Twitter_Logo_as_of_2021.svg" alt="Twitter" />
                        <span>Twitter</span>
                    </a>
                    <a href="https://www.instagram.com/ycpMumbai" target="_blank" rel="noopener noreferrer">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" />
                        <span>Instagram</span>
                    </a>
                    <a href="https://www.linkedin.com/company/ycpMumbai" target="_blank" rel="noopener noreferrer">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg" alt="LinkedIn" />
                        <span>LinkedIn</span>
                    </a>
                    <a href="https://www.youtube.com/ycpMumbai" target="_blank" rel="noopener noreferrer">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/4/4f/YouTube_icon_%282013-2017%29.png" alt="YouTube" />
                        <span>YouTube</span>
                    </a>
                </div>
            </div>

            <div className="contact-section">
                <h2>Contact Information</h2>
                <p>If you have any questions or need further information, feel free to reach out to us through our social media platforms or email us at <a href="mailto:info@ycpMumbai.edu">info@ycpMumbai.edu</a>.</p>
            </div>
        </div>
    );
}

export default Departments;
