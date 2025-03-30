import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import PhotoAlbumComponent from './components/PhotoAlbum';
import YouTubePlayer from "./components/YouTubePlayer";

function App() {
    return (
        <div className="App">
            <LandingPage/>
            <PhotoAlbumComponent/>
            <div className="video-player-container">
                <YouTubePlayer/>
            </div>
        </div>
    );
}

export default App;