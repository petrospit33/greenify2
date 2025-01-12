import React from 'react';

const images = [
  {
    url: '/src/assets/images/waterr.jpg',
    alt: 'Σύστημα αυτόματου ποτίσματος'
  },
  {
    url: '/src/assets/images/lookwater.jpg',
    alt: 'Έλεγχος συστήματος άρδευσης'
  }
];

const AutomaticIrrigationGallery = () => {
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

export default AutomaticIrrigationGallery;