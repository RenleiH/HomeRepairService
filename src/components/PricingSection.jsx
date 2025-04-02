import React from 'react';
import { Link } from 'react-router-dom';

const PricingSection = () => {
  return (
    <section className="bg-white p-8 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-bold mb-4">Pricing Transparency</h2>
      <p className="text-gray-600 mb-6">
        We use fixed prices or structured estimates and provide full cost details.
      </p>
      <Link
        to="/pricing"
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Learn More
      </Link>
    </section>
  );
};

export default PricingSection; 