import React from 'react';
import './EventList.css'; // Import CSS for styling

// Import images
import media7 from 'C:/Users/pooja.desale/Desktop/Alumni Project/alumni-portal/src/pages/media7.png';
import img2 from 'C:/Users/pooja.desale/Desktop/Alumni Project/alumni-portal/src/pages/WhatsApp Image 2024-08-13 at 10.32.49 AM.jpeg';
import img3 from 'C:/Users/pooja.desale/Desktop/Alumni Project/alumni-portal/src/pages/WhatsApp Image 2024-08-13 at 10.03.40 AM.jpeg';

function EventList() {
    const events = [
        {
            id: 1,
            name: 'Alumni Meet 2024',
            date: 'September 25, 2024',
            time: '10:00 AM - 2:00 PM',
            description: 'An annual gathering for alumni to reconnect with the college and network with fellow graduates.',
            image: media7,
        },
        {
            id: 2,
            name: 'Tech Innovation Workshop',
            date: 'October 10, 2024',
            time: '9:00 AM - 4:00 PM',
            description: 'A hands-on workshop focused on the latest trends and innovations in technology.',
            image: img2,
        },
        {
            id: 3,
            name: 'Cultural Fest 2024',
            date: 'November 15, 2024',
            time: '5:00 PM - 10:00 PM',
            description: 'A vibrant cultural festival showcasing the talents of students through music, dance, and art.',
            image: img3,
        },
        {
            id: 4,
            name: 'Guest Lecture Series: Leadership in the Modern World',
            date: 'December 5, 2024',
            time: '11:00 AM - 1:00 PM',
            description: 'A special guest lecture on leadership and its role in today’s fast-paced world.',
            image: media7,
        },
    ];

    return (
        <div className="event-list-container">
            <h1>College Events</h1>
            <p>Stay updated with the latest events happening at our college.</p>
            <div className="events">
                {events.map(event => (
                    <div key={event.id} className="event-card">
                        <img src={event.image} alt={event.name} />
                        <div className="event-details">
                            <h2>{event.name}</h2>
                            <p><strong>Date:</strong> {event.date}</p>
                            <p><strong>Time:</strong> {event.time}</p>
                            <p>{event.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default EventList;
