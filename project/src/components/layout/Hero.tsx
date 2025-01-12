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
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl text-white">
          <h1 className="text-5xl font-bold mb-6">
            Προσαρμοσμένες Υπηρεσίες Φροντίδας και Διαμόρφωσης Εξωτερικών Χώρων στην Αθήνα
          </h1>
          <p className="text-xl mb-8">
            Με αφοσίωση και επαγγελματισμό, η ομάδα μας αναλαμβάνει τη φροντίδα και την ανάπτυξη των χώρων πρασίνου σας, ιδιωτικών ή επαγγελματικών.
          </p>
          <a
            href="#contact"
            className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition duration-300"
          >
            Επικοινωνήστε Μαζί Μας
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;