import React from 'react';
import './LandingPage.css';
import AudioPlayer from './AudioPlayer';

function LandingPage() {
    return (
        <div className="landing-container" style={{backgroundImage: "url(/landingBackground.jpg)"}}>
            <div className="audio-player-container">
                <AudioPlayer />
            </div>
            <div className="content-container">
                <div className="left-side">
                    <div className="message-container">
                        <h1>Happy Mother's Day!</h1>
                        <p>To the most wonderful mom, who fills our hearts with love!</p>
                        <p>We love you from Kerry, Callum, Daniel, Ellie and John</p>
                    </div>
                </div>
                <div className="right-side">
                    <div className="photo-frame">
                        <img src="/just_mum.jpg" alt="Mother's Day"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;