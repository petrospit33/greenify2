import React, { useState, useEffect } from 'react';
import logo from '../../assets/images/logo.png';
import ThemeToggle from '../ThemeToggle';

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
    <header className={`fixed w-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm z-50 shadow-sm transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="container mx-auto px-4 py-0.5 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Greenify Logo" className="h-16 w-auto" />
          <span className="text-2xl font-bold text-green-800 dark:text-green-400">Greenify</span>
        </div>
        <div className="flex items-center space-x-6">
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-green-800 dark:text-green-400 hover:text-green-600 dark:hover:text-green-300">Αρχική Σελίδα</a>
            <a href="#services" className="text-green-800 dark:text-green-400 hover:text-green-600 dark:hover:text-green-300">Υπηρεσίες</a>
            <a href="#contact" className="text-green-800 dark:text-green-400 hover:text-green-600 dark:hover:text-green-300">Επικοινωνία</a>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;