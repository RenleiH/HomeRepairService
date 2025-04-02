import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="bg-white p-8 rounded-lg shadow-md mb-8">
      <h2 className="text-3xl font-bold mb-4">Find Reliable Home Repair Services</h2>
      <p className="text-gray-600 mb-6">
        Whether you're a home owner in need of repair or a service provider looking for work,
        we've got you covered.
      </p>
      <div className="flex space-x-4">
        <Link
          to="/homeowner"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          For Home Owner
        </Link>
        <Link
          to="/service-provider"
          className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
        >
          For Service Provider
        </Link>
      </div>
    </section>
  );
};

export default HeroSection; 