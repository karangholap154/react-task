import React, { useState } from "react";

const ImageCarousel = () => {
  const images = [
    "https://picsum.photos/201/300",
    "https://picsum.photos/200/301",
    "https://picsum.photos/200/302",
  ];
  const [current, setCurrent] = useState(0);

  const nextImage = () => setCurrent((current + 1) % images.length);
  const prevImage = () => setCurrent((current - 1 + images.length) % images.length);

  return (
    <div className="app-container">
      <h2>Image Carousel</h2>
      <img src={images[current]} alt={`Slide ${current + 1}`} />
      <div>
        <button onClick={prevImage}>Previous</button>
        <button onClick={nextImage}>Next</button>
      </div>
    </div>
  );
};

export default ImageCarousel;
