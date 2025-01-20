import React from 'react';

const About = () => {
  return (
    <section className="py-8 bg-green-800 dark:bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Greenify</h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg leading-relaxed text-gray-100 dark:text-gray-200">
            Η Greenify είναι μια εξειδικευμένη εταιρεία συντήρησης και δημιουργίας κήπων στην Αθήνα. 
            Με επιστημονικές γνώσεις και πάθος για το πράσινο, η ομάδα μας, αποτελούμενη από απόφοιτο 
            Γεωπονικού Πανεπιστημίου, προσφέρει προσωπική φροντίδα και εξειδικευμένες λύσεις για τον 
            κήπο σας. Εγγυούμαστε άριστο αποτέλεσμα σε κάθε έργο.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;