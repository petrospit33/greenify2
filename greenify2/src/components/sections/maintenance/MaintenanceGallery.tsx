import React from 'react';
import hedgess from '../../../assets/images/hedgess.jpg';
import prun from '../../../assets/images/prun.jpg';

const galleryImages = [
  {
    url: prun,
    alt: 'Επαγγελματικό κλάδεμα δέντρων με ειδικά εργαλεία'
  },
  {
    url: hedgess,
    alt: 'Διαμόρφωση θάμνων με επαγγελματικό κλαδευτήρι'
  }
];

const MaintenanceGallery = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8 mt-12">
      {galleryImages.map((image, index) => (
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

export default MaintenanceGallery;