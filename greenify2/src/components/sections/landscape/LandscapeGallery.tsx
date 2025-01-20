import React from 'react';
import nplacee from '../../../assets/images/nplacee.jpg';

const LandscapeGallery = () => {
  return (
    <div className="max-w-2xl mx-auto mt-12">
      <div className="rounded-lg overflow-hidden shadow-lg">
        <img
          src={nplacee}
          alt="Σχεδιασμός κήπου"
          className="w-full h-80 object-cover hover:scale-105 transition duration-300"
        />
      </div>
    </div>
  );
};

export default LandscapeGallery;