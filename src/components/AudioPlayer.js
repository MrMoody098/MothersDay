import React, { useState, useRef } from 'react';
import './AudioPlayer.css';

const AudioPlayer = () => {
    const [currentTrack, setCurrentTrack] = useState(0);
    const audioRef = useRef(null);

    const playlist = [
        { title: 'Elton John - Thank You Mama', src: '/Elton_John.mp3' },
        { title: 'Teddy Swims - you’re still the one', src: '/Teddy_Swims.mp3' },
        {title: 'Goo Goo Dolls - Iris', src:'/Goo.mp3'},
        {title: 'Elton John - Your Song', src: '/Elton_John-Your_Song.mp3'},
        {title: 'Dermot Kennedy - For Island Fires and Family',src:'dermot_Kennedy_1.mp3'}
    ];

    const handleEnded = () => {
        setCurrentTrack((prevTrack) => (prevTrack + 1) % playlist.length);
    };

    const handlePlay = () => {
        audioRef.current.play();
    };

    const handlePause = () => {
        audioRef.current.pause();
    };

    const handleNext = () => {
        setCurrentTrack((prevTrack) => (prevTrack + 1) % playlist.length);
    };

    const handlePrev = () => {
        setCurrentTrack((prevTrack) => (prevTrack - 1 + playlist.length) % playlist.length);
    };

    return (
        <div className="audio-player">
            <h2>{playlist[currentTrack].title}</h2>
            <audio
                ref={audioRef}
                src={playlist[currentTrack].src}
                onEnded={handleEnded}
                controls
                autoPlay
            />
            <div>
                <button onClick={handlePrev}>Prev</button>
                <button onClick={handlePlay}>Play</button>
                <button onClick={handlePause}>Pause</button>
                <button onClick={handleNext}>Next</button>
            </div>
        </div>
    );
};

export default AudioPlayer;