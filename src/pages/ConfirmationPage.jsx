import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import OrderConfirmation from '../components/OrderConfirmation';

const ConfirmationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const orderDetails = location.state;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Order Confirmation</h1>
        <button
          onClick={() => navigate('/')}
          className="bg-gray-100 text-gray-700 px-4 py-2 rounded hover:bg-gray-200 transition-colors"
        >
          Return to Dashboard
        </button>
      </div>
      <div className="bg-white rounded-lg shadow-md p-8">
        <OrderConfirmation details={orderDetails} />
      </div>
    </div>
  );
};

export default ConfirmationPage; 