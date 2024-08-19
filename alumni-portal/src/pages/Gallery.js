import React from 'react';
import './Gallery.css'; // Import the CSS file for styling

function Gallery() {
    return (
        <div className="gallery-container">
            <h1>YCP Mumbai Gallery</h1>

            {/* Photos Section */}
            <section className="photos-section">
                <h2>Photo Gallery</h2>
                <div className="photos-grid">
                    <div className="photo-item">
                        <img src={require('./media1.png')} alt="YCP Mumbai Event 1" />
                        <p>National Science Day 2023</p>
                    </div>
                    <div className="photo-item">
                        <img src={require('./media2.png')} alt="YCP Mumbai Event 2" />
                        <p>Annual Tech Symposium 2024</p>
                    </div>
                    <div className="photo-item">
                        <img src={require('./media3.png')} alt="YCP Mumbai Event 3" />
                        <p>Women's Day Celebration 2023</p>
                    </div>
                </div>
            </section>

            {/* Videos Section */}
            <section className="videos-section">
                <h2>Video Gallery</h2>
                <div className="videos-grid">
                    <div className="video-item">
                        <iframe
                            width="300"
                            height="200"
                            src="https://www.youtube.com/embed/YCPMumbaiVirtualTour"
                            title="YCP Mumbai Virtual Tour"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                        <p>YCP Mumbai Virtual Tour</p>
                    </div>
                    <div className="video-item">
                        <iframe
                            width="300"
                            height="200"
                            src="https://www.youtube.com/embed/YCPMumbaiAIlecture"
                            title="AI Workshop at YCP Mumbai"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                        <p>AI Workshop 2024</p>
                    </div>
                    <div className="video-item">
                        <iframe
                            width="300"
                            height="200"
                            src="https://www.youtube.com/embed/YCPMumbaiCulturalFest"
                            title="Cultural Fest Highlights"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                        <p>Cultural Fest 2024 Highlights</p>
                    </div>
                    <div className="video-item">
                        <iframe
                            width="300"
                            height="200"
                            src="https://www.youtube.com/embed/YCPMumbaiSportsDay"
                            title="Sports Meet 2024"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                        <p>Sports Meet 2024</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Gallery;
