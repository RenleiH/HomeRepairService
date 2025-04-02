import React from 'react';
import TrustIcon from './TrustIcon';

const TrustSection = () => {
  return (
    <section className="bg-white p-8 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-bold mb-4">Trust and Reliability</h2>
      <p className="text-gray-600 mb-6">
        We build user trust through verified reviews, background checks, and service
        guarantees.
      </p>
      <div className="flex space-x-4">
        <div className="flex-1 text-center">
          <TrustIcon icon="⭐" alt="Verified Reviews" />
          <h3 className="text-lg font-bold mb-2">Verified Reviews</h3>
          <p className="text-gray-600">Read honest reviews from other users.</p>
        </div>
        <div className="flex-1 text-center">
          <TrustIcon icon="🛡️" alt="Background Checks" />
          <h3 className="text-lg font-bold mb-2">Background Checks</h3>
          <p className="text-gray-600">All service providers are thoroughly vetted.</p>
        </div>
        <div className="flex-1 text-center">
          <TrustIcon icon="🤝" alt="Service Guarantees" />
          <h3 className="text-lg font-bold mb-2">Service Guarantees</h3>
          <p className="text-gray-600">We stand behind our services.</p>
        </div>
      </div>
    </section>
  );
};

export default TrustSection; 