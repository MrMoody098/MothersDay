import React, { useState } from 'react';

const YouTubePlayer = () => {
    const [videoId, setVideoId] = useState('iee2TATGMyI');

    const handleVideoChange = (event) => {
        setVideoId(event.target.value);
    };

    return (
        <div>
            <input
                type="text"
                value={videoId}
                onChange={handleVideoChange}
                placeholder="Enter YouTube video ID"
            />
            <div className="video-container">
                <iframe
                    width="640"
                    height="390"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

export default YouTubePlayer;