import React from 'react';
import { Flower2, TreePine, Shovel, Droplets } from 'lucide-react';
import ServiceCard from '../ServiceCard';

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-green-800 mb-16">
          Οι Υπηρεσίες Μας
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard
            icon={<Flower2 className="h-8 w-8" />}
            title="Συντήρηση Κήπων"
            description="Ολοκληρωμένη φροντίδα και συντήρηση για τον κήπο σας"
            href="#maintenance"
          />
          <ServiceCard
            icon={<TreePine className="h-8 w-8" />}
            title="Αρχιτεκτονική Τοπίου"
            description="Σχεδιασμός και υλοποίηση του ιδανικού κήπου για εσάς"
            href="#landscape"
          />
          <ServiceCard
            icon={<Shovel className="h-8 w-8" />}
            title="Καθαρισμός Οικοπέδων"
            description="Κοπή και απομάκρυνση ξερών χόρτων και δέντρων"
            href="#plot-cleaning"
          />
          <ServiceCard
            icon={<Droplets className="h-8 w-8" />}
            title="Αυτόματο Πότισμα"
            description="Εγκατάσταση και συντήρηση συστημάτων αυτόματου ποτίσματος"
            href="#irrigation"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;