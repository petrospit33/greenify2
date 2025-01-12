import React from 'react';
import MaintenanceList from './maintenance/MaintenanceList';
import MaintenanceGallery from './maintenance/MaintenanceGallery';
import SectionHeader from '../ui/SectionHeader';

const GardenMaintenance = () => {
  return (
    <section id="maintenance" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="Συντήρηση Κήπων"
          subtitle=""
        />
        
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-green-800 mb-8">
            ΤΡΟΠΟΣ ΚΑΙ ΕΙΔΟΣ ΣΥΝΤΗΡΗΣΗΣ
          </h3>
          <MaintenanceList />
        </div>

        <MaintenanceGallery />

        <div className="mt-16 text-center">
          <p className="text-xl text-gray-700 mb-6">
            Για περισσότερες πληροφορίες, επικοινωνήστε μαζί μας!
          </p>
          <a
            href="#contact"
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition duration-300"
          >
            Επικοινωνία
          </a>
        </div>
      </div>
    </section>
  );
};

export default GardenMaintenance;