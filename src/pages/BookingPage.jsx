import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import BookingConfirmation from '../components/BookingConfirmation';

const BookingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { repairman, price, formData, mediaFiles } = location.state || {};

  const handleProceedToPayment = () => {
    navigate('/payment', {
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
          <BookingConfirmation
            details={{
              repairman,
              price,
              serviceType: formData?.serviceType,
              address: formData?.address,
              description: formData?.description,
              mediaFiles
            }}
            onProceedToPayment={handleProceedToPayment}
          />
        </section>
      </main>
    </div>
  );
};

export default BookingPage; 