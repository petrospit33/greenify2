import React from 'react';
import { Phone, Mail } from 'lucide-react';
import ContactForm from '../ContactForm';
import logo from '../../assets/images/logo.png';

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative bg-gray-100 dark:bg-gray-800">
      <div className="absolute inset-0 opacity-10">
        <img 
          src={logo}
          alt="" 
          className="w-full h-full object-contain"
        />
      </div>
      <div className="container mx-auto px-4 relative">
        <div className="mb-16 max-w-3xl mx-auto px-4 py-2 bg-green-50/80 dark:bg-green-900/30 backdrop-blur-sm rounded-lg border-2 border-green-200 dark:border-green-700 text-center shadow-md transform hover:scale-105 transition-transform duration-300">
          <p className="text-xl text-green-800 dark:text-green-300 font-semibold leading-relaxed">
            Για κάθε υπηρεσία μας, προσφέρουμε δωρεάν επίσκεψη για την αξιολόγηση των αναγκών του χώρου σας, χωρίς καμιά δέσμευση για εσάς.
          </p>
        </div>
        
        <h2 className="text-4xl font-bold text-center text-gray-700 dark:text-gray-200 mb-16">
          Επικοινωνία
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gray-200/70 dark:bg-gray-700/70 backdrop-blur-sm p-8 rounded-lg shadow-md">
            <ContactForm />
          </div>
          <div className="bg-gray-200/70 dark:bg-gray-700/70 backdrop-blur-sm p-8 rounded-lg shadow-md space-y-8">
            <div className="flex items-center space-x-4">
              <Phone className="h-6 w-6 text-gray-600 dark:text-gray-300" />
              <span className="text-gray-700 dark:text-gray-200">6907545636</span>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="h-6 w-6 text-gray-600 dark:text-gray-300" />
              <span className="text-gray-700 dark:text-gray-200">greenifygr@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;