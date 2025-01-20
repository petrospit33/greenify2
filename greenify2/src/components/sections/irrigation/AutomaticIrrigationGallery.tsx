import React from 'react';
import waterr from '../../../assets/images/waterr.jpg';
import lookwater from '../../../assets/images/lookwater.jpg';

const images = [
  {
    url: waterr,
    alt: 'Σύστημα αυτόματου ποτίσματος'
  },
  {
    url: lookwater,
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