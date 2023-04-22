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
      <button className="carousel-btn left" onClick={showPrevImage}>&lt;</button>
      <img src={images[currentImageIndex]} alt="Carousel Image" />
      {/* <div className="carousel-controls"> */}
      <button className="carousel-btn right" onClick={showNextImage}>&gt;</button>
      {/* </div> */}
    </div>
  );
}

export default Carousel;