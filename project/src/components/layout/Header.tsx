import React, { useState, useEffect } from 'react';

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <header className={`fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="container mx-auto px-4 py-0.5 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img src="/src/assets/images/logo.png" alt="Greenify Logo" className="h-16 w-auto" />
          <span className="text-2xl font-bold text-green-800">Greenify</span>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="text-green-800 hover:text-green-600">Αρχική Σελίδα</a>
          <a href="#services" className="text-green-800 hover:text-green-600">Υπηρεσίες</a>
          <a href="#contact" className="text-green-800 hover:text-green-600">Επικοινωνία</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;