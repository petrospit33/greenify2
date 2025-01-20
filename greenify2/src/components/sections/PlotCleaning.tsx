import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import PlotCleaningGallery from './plot-cleaning/PlotCleaningGallery';
import { ArrowRight } from 'lucide-react';

const PlotCleaning = () => {
  return (
    <section id="plot-cleaning" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="Καθαρισμός Οικοπέδων"
        />

        <div className="mt-12 max-w-4xl mx-auto text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
          <p className="mb-6">
           Αναλαμβάνουμε τον πλήρη καθαρισμό οικοπέδων και περιβάλλοντων χώρων, σύμφωνα με την Πυροσβεστική Διάταξη 20/2024, που υποχρεώνει τους ιδιοκτήτες να διατηρούν τους χώρους καθαρούς για την αποτροπή κινδύνου πυρκαγιάς. Με επαγγελματικό εξοπλισμό και εξειδικευμένο προσωπικό, εξασφαλίζουμε την προστασία του χώρου σας και τη συμμόρφωση με τη νομοθεσία.
          </p>
        </div>

        <PlotCleaningGallery />

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center space-x-2 bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition duration-300"
          >
            <span>Ζητήστε προσφορά για τον καθαρισμό του χώρου σας</span>
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PlotCleaning;