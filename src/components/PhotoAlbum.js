import React, { useState } from 'react';
import { RowsPhotoAlbum } from 'react-photo-album';
import 'react-photo-album/rows.css';
import 'react-image-lightbox/style.css';
import './PhotoAlbumComponent.css';
import photos from '../photos';
import Lightbox from 'react-image-lightbox';

const PhotoAlbumComponent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    const openLightbox = (index) => {
        setPhotoIndex(index);
        setIsOpen(true);
        setIsImageLoaded(false);
    };

    const handleImageLoad = () => {
        setIsImageLoaded(true);
    };

    return (
        <div className="photo-album">
            <RowsPhotoAlbum
                photos={photos}
                onClick={({ index }) => openLightbox(index)}
            />
            {isOpen && (
                <Lightbox
                    mainSrc={photos[photoIndex].src}
                    nextSrc={photos[(photoIndex + 1) % photos.length].src}
                    prevSrc={photos[(photoIndex + photos.length - 1) % photos.length].src}
                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={() => {
                        setPhotoIndex((photoIndex + photos.length - 1) % photos.length);
                        setIsImageLoaded(false);
                    }}
                    onMoveNextRequest={() => {
                        setPhotoIndex((photoIndex + 1) % photos.length);
                        setIsImageLoaded(false);
                    }}
                    imageLoadErrorMessage="Image failed to load"
                    imageLoadErrorSrc={photos[photoIndex].src}
                    onImageLoad={handleImageLoad}
                />
            )}
        </div>
    );
};

export default PhotoAlbumComponent;