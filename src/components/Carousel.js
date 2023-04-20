import React, { useState } from 'react';

function Carousel({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  function showNextImage() {
    if (currentImageIndex === images.length - 1) {
      setCurrentImageIndex(0);
    } else {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  }

  function showPrevImage() {
    if (currentImageIndex === 0) {
      setCurrentImageIndex(images.length - 1);
    } else {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  }

  return (
    <div className="carousel">
      <img src={images[currentImageIndex]} alt="Carousel Image" />
      <div className="carousel-controls">
        <button onClick={showPrevImage}>Prev</button>
        <button onClick={showNextImage}>Next</button>
      </div>
    </div>
  );
}

export default Carousel;