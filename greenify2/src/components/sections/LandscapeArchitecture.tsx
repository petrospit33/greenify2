import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import LandscapeGallery from './landscape/LandscapeGallery';
import { ArrowRight } from 'lucide-react';

const LandscapeArchitecture = () => {
  return (
    <section id="landscape" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="Αρχιτεκτονική Τοπίου"
          subtitle="Σχεδιασμός και υλοποίηση του ιδανικού κήπου για εσάς"
        />

        <div className="mt-12 max-w-4xl mx-auto text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
          <p className="mb-6">
            Η βασική μας αρχή στον σχεδιασμό και την κατασκευή κήπων είναι ότι ένας σωστά διαμορφωμένος κήπος βελτιώνει το περιβάλλον μας, προσφέροντας ευεξία και στιγμές χαλάρωσης. Στόχος μας είναι να συνδυάζουμε την τέχνη της Κηποτεχνίας με όλες τις μορφές καλλιτεχνικής έκφρασης.
          </p>
        </div>

        <LandscapeGallery />

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center space-x-2 bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition duration-300"
          >
            <span>Ζητήστε μας ιδέες για το δικό σας ξεχωριστό χώρο</span>
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default LandscapeArchitecture;