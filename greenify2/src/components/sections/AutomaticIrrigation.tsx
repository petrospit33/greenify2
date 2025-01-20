import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import AutomaticIrrigationGallery from './irrigation/AutomaticIrrigationGallery';
import { ArrowRight } from 'lucide-react';

const AutomaticIrrigation = () => {
  return (
    <section id="irrigation" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="Αυτόματο Πότισμα"
        />

        <div className="mt-12 max-w-4xl mx-auto text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
          <p className="mb-6">
           Αναλαμβάνουμε τη μελέτη, εγκατάσταση και συντήρηση αυτόματων συστημάτων ποτίσματος, διασφαλίζοντας έναν κήπο με ιδανική άρδευση και χαμηλό κόστος λειτουργίας χωρίς περιττές σπατάλες.
          </p>
        </div>

        <AutomaticIrrigationGallery />

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center space-x-2 bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition duration-300"
          >
            <span>Ζητήστε προσφορά για το σύστημα ποτίσματός σας</span>
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AutomaticIrrigation;