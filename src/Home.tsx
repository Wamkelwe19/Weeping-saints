import React, { useState, useEffect } from 'react';
import AngelEntrance from '../components/website/AngelEntrance';
import Hero from '../components/website/Hero';
import Services from '../components/website/Services';
import Contact from '../components/website/Contact';


export default function Home() {
  const [showEntrance, setShowEntrance] = useState(true);
  const [showWebsite, setShowWebsite] = useState(false);

  const handleEntranceComplete = () => {
    setShowEntrance(false);
    setTimeout(() => {
      setShowWebsite(true);
    }, 500);
  };

  // Add custom styles for the gold color and fonts
  useEffect(() => {
    // Add Playfair Display font
    // Removed: font and style injection
    return () => {};
  }, []);

  return (
    <div className="min-h-screen">
      {showEntrance && (
        <AngelEntrance onComplete={handleEntranceComplete} />
      )}
      
      {showWebsite && (
        <div className="animate-in fade-in duration-1000">
          <Hero />
          <Services />
          <Contact />
        </div>
      )}
    </div>
  );
}