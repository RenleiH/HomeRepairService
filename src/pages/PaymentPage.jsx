import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PaymentSection from '../components/PaymentSection';

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { repairman, price, formData, mediaFiles } = location.state || {};

  const handleCompletePayment = () => {
    navigate('/confirmation', {
      state: {
        repairman,
        price,
        serviceType: formData?.serviceType,
        address: formData?.address,
        description: formData?.description,
        mediaFiles
      }
    });
  };

  return (
    <div className="bg-gray-100">
      <main className="container mx-auto p-8">
        <section className="bg-white p-8 rounded-lg shadow-md">
          <PaymentSection onCompletePayment={handleCompletePayment} />
        </section>
      </main>
    </div>
  );
};

export default PaymentPage; 