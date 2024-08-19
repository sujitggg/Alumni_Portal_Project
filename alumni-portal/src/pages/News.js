import React, { useState } from 'react';
import './News.css'; // Import the CSS file for styling

// Import local images
import news1 from 'C:/Users/pooja.desale/Desktop/Alumni Project/alumni-portal/src/pages/news1.png';
import news2 from 'C:/Users/pooja.desale/Desktop/Alumni Project/alumni-portal/src/pages/news2.png';
import news3 from 'C:/Users/pooja.desale/Desktop/Alumni Project/alumni-portal/src/pages/news3.png';

// Sample YCP Mumbai news data
const newsData = [
    {
        id: 1,
        title: 'YCP Mumbai Alumni Meet 2024',
        date: 'August 10, 2024',
        time: '10:00 AM',
        day: 'Saturday',
        photo: news1, // Use the imported local image
        description: 'Join us for the YCP Mumbai Alumni Meet 2024. Reconnect with classmates, network with industry leaders, and celebrate the achievements of our alumni.',
    },
    {
        id: 2,
        title: 'Launch of New Research Center',
        date: 'July 25, 2024',
        time: '2:00 PM',
        day: 'Thursday',
        photo: news2, // Use the imported local image
        description: 'YCP Mumbai is proud to announce the inauguration of our new research center. This facility aims to foster innovation and support cutting-edge research initiatives.',
    },
    {
        id: 3,
        title: 'YCP Mumbai Annual Sports Day',
        date: 'June 15, 2024',
        time: '9:00 AM',
        day: 'Friday',
        photo: news3, // Use the imported local image
        description: 'The Annual Sports Day at YCP Mumbai was a tremendous success. Students participated in various sports events, showcasing their athletic skills and team spirit.',
    },
    // Add more news items as needed
];

function News() {
    const [visibleNews, setVisibleNews] = useState(3);

    const loadMoreNews = () => {
        setVisibleNews(prevVisibleNews => prevVisibleNews + 3);
    };

    return (
        <div className="news-container">
            <h1>YCP Mumbai News</h1>
            <div className="news-list">
                {newsData.slice(0, visibleNews).map(news => (
                    <div key={news.id} className="news-item">
                        <img src={news.photo} alt={news.title} className="news-photo" />
                        <div className="news-details">
                            <h2>{news.title}</h2>
                            <p className="news-date-time">
                                {news.day}, {news.date} - {news.time}
                            </p>
                            <p className="news-description">{news.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            {visibleNews < newsData.length && (
                <button onClick={loadMoreNews} className="load-more-button">
                    Load More News
                </button>
            )}
        </div>
    );
}

export default News;
