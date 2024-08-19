import React, { useState } from 'react';
import './AlumniData.css'; // Import the CSS file for styling

// Import images
import passport1 from 'C:/Users/pooja.desale/Desktop/Alumni Project/alumni-portal/src/pages/passport1.png';
import passport2 from 'C:/Users/pooja.desale/Desktop/Alumni Project/alumni-portal/src/pages/passport2.png';
import passport3 from 'C:/Users/pooja.desale/Desktop/Alumni Project/alumni-portal/src/pages/Passport3.png';

// Sample data for alumni
const alumniData = [
    {
        id: 1,
        name: 'Utkarsh Patil',
        designation: 'Software Engineer at Google',
        achievements: 'Developed scalable microservices, led the development team for major projects.',
        photo: passport1,
        additionalInfo: 'Graduated in 2015, B.Tech in Computer Science.'
    },
    {
        id: 2,
        name: 'Manisha Loni',
        designation: 'Product Manager at Apple',
        achievements: 'Led the design of the latest iPhone UI, managed a team of 20 designers.',
        photo: passport2,
        additionalInfo: 'Graduated in 2014, B.Tech in Information Technology.'
    },
    {
        id: 3,
        name: 'Sujit Patil',
        designation: 'Data Scientist at Facebook',
        achievements: 'Implemented machine learning algorithms, published papers on AI.',
        photo: passport3,
        additionalInfo: 'Graduated in 2016, M.Tech in Data Science.'
    },
    // Add more alumni data as needed
];

function AlumniData() {
    const [visibleAlumni, setVisibleAlumni] = useState(3); // Number of alumni to show initially

    const loadMoreAlumni = () => {
        setVisibleAlumni((prev) => prev + 3); // Load 3 more alumni each time the button is clicked
    };

    return (
        <div>
            <h1>Alumni Data</h1>
            <div className="alumni-container">
                {alumniData.slice(0, visibleAlumni).map(alumni => (
                    <div key={alumni.id} className="alumni-card">
                        <img src={alumni.photo} alt={`${alumni.name}'s photo`} className="alumni-photo" />
                        <h2>{alumni.name}</h2>
                        <p><strong>Current Designation:</strong> {alumni.designation}</p>
                        <p><strong>Achievements:</strong> {alumni.achievements}</p>
                        <p><strong>Additional Info:</strong> {alumni.additionalInfo}</p>
                    </div>
                ))}
            </div>
            {visibleAlumni < alumniData.length && (
                <button onClick={loadMoreAlumni} className="load-more-button">Load More</button>
            )}
        </div>
    );
}

export default AlumniData;
