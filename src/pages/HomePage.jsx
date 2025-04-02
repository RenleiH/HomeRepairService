import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import TrustSection from '../components/TrustSection';
import PricingSection from '../components/PricingSection';

const HomePage = () => {
  return (
    <div className="bg-gray-100">
      <main className="container mx-auto">
        <HeroSection />
        <TrustSection />
        <PricingSection />
      </main>
    </div>
  );
};

export default HomePage; 