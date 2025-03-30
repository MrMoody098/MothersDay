import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './PhotoCarousel.css';

const PhotoCarousel = () => {
    return (
        <div className="photo-carousel">
            <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
                <div>
                    <img src="/photos/all_of_us.jpg" alt="Photo 1" />
                </div>
                <div>
                    <img src="/photos/mother_beutiful.jpg" alt="Photo 2" />
                </div>
                <div>
                    <img src="/photo3.jpg" alt="Photo 3" />
                </div>
            </Carousel>
        </div>
    );
};

export default PhotoCarousel;