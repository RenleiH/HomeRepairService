import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <main className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Find Reliable Home Repair Services</h2>
        <p className="text-gray-600 mb-8">Whether you're a home owner in need of repair or a service provider looking for work, we've got you covered.</p>
        <div className="flex gap-4">
          <Link to="/homeowner" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors">
            For Home Owners
          </Link>
          <Link to="/service-provider" className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition-colors">
            For Service Providers
          </Link>
        </div>
      </div>

      {/* Trust Section */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Trust and Reliability</h2>
        <p className="text-gray-600 mb-8">We build user trust through verified reviews, background checks, and service guarantees.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-4">⭐</div>
            <h3 className="text-xl font-semibold mb-2">Verified Reviews</h3>
            <p className="text-gray-600">Read honest reviews from other users.</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="text-xl font-semibold mb-2">Background Checks</h3>
            <p className="text-gray-600">All service providers are thoroughly vetted.</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-semibold mb-2">Service Guarantees</h3>
            <p className="text-gray-600">We stand behind our services.</p>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Pricing Transparency</h2>
        <p className="text-gray-600 mb-6">We use fixed prices or structured estimates and provide full cost details.</p>
        <Link to="/pricing" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors inline-block">
          Learn More
        </Link>
      </div>
    </main>
  );
};

export default HomePage; 