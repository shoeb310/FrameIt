import React from 'react';

const ImageGallery = ({ images }) => {
  return (
    <div className="masonry mt-12">
      {images.map((image) => (
        <div
          key={image.id}
          className="break-inside-avoid mb-4"
        >
          <img
            src={image.urls.small}
            alt={image.alt_description}
            className="w-full h-auto object-cover rounded-lg transition-transform duration-300 transform hover:scale-105"
            loading="lazy" // Lazy loading for performance
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
