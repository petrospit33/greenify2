import React from 'react';
import Header from './components/layout/Header';
import Hero from './components/layout/Hero';
import Services from './components/sections/Services';
import GardenMaintenance from './components/sections/GardenMaintenance';
import LandscapeArchitecture from './components/sections/LandscapeArchitecture';
import PlotCleaning from './components/sections/PlotCleaning';
import AutomaticIrrigation from './components/sections/AutomaticIrrigation';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-custom-green text-gray-800">
      <Header />
      <Hero />
      <Services />
      <GardenMaintenance />
      <LandscapeArchitecture />
      <PlotCleaning />
      <AutomaticIrrigation />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;