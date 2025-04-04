import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import RepairmanList from '../components/RepairmanList';

const RepairmenPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { formData, mediaFiles } = location.state || {};

  const handleBookRepairman = (repairman, price) => {
    navigate('/booking', {
      state: {
        repairman,
        price,
        formData,
        mediaFiles
      }
    });
  };

  return (
    <div className="bg-gray-100">
      <main className="container mx-auto p-8">
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6"> AI Recommended Available Repairmen</h2>
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">AI Summarized Service Details</h3>
            <div className="bg-gray-50 p-4 rounded">
              <p><span className="font-medium">Service Type:</span> {formData?.serviceType}</p>
              <p><span className="font-medium">Location:</span> {formData?.address}</p>
              <p><span className="font-medium">Description:</span> {formData?.description}</p>
            </div>
          </div>
          <RepairmanList onBookRepairman={handleBookRepairman} />
        </section>
      </main>
    </div>
  );
};

export default RepairmenPage; 