import React from 'react';
import cleaningss from '../../../assets/images/cleaningss.jpg';
import clearss from '../../../assets/images/clearss.jpg';

const images = [
  {
    url: cleaningss,
    alt: 'Καθαρισμός ξερών χόρτων'
  },
  {
    url: clearss,
    alt: 'Απομάκρυνση κλαδιών'
  }
];

const PlotCleaningGallery = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8 mt-12">
      {images.map((image, index) => (
        <div key={index} className="rounded-lg overflow-hidden shadow-lg">
          <img
            src={image.url}
            alt={image.alt}
            className="w-full h-64 object-cover hover:scale-105 transition duration-300"
          />
        </div>
      ))}
    </div>
  );
};

export default PlotCleaningGallery;