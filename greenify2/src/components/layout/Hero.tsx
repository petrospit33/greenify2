import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&q=80"
          alt="Κήπος στην Αθήνα"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
        <div className="max-w-3xl text-white text-center px-4 sm:px-6 md:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Προσαρμοσμένες Υπηρεσίες Φροντίδας και Διαμόρφωσης Εξωτερικών Χώρων στην Αθήνα
          </h1>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8">
            Με αφοσίωση και επαγγελματισμό, η ομάδα μας αναλαμβάνει τη φροντίδα και την ανάπτυξη των χώρων πρασίνου σας, ιδιωτικών ή επαγγελματικών.
          </p>
          <a
            href="#contact"
            className="inline-block bg-green-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg hover:bg-green-700 transition duration-300"
          >
            Επικοινωνήστε Μαζί Μας
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;