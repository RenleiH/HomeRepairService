import React from 'react';

const BookingConfirmation = ({ details, onProceedToPayment }) => {
  return (
    <div className="mt-6">
      <h3 className="text-xl font-bold mb-4">Booking Confirmation</h3>
      <div className="bg-gray-50 p-4 rounded space-y-2">
        <p><span className="font-semibold">Repairman:</span> {details.repairman}</p>
        <p><span className="font-semibold">Price:</span> ${details.price}</p>
        <p><span className="font-semibold">Service Type:</span> {details.serviceType}</p>
        <p><span className="font-semibold">Address:</span> {details.address}</p>
        <p><span className="font-semibold">Description:</span> {details.description}</p>
      </div>
      <button
        onClick={onProceedToPayment}
        className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Proceed to Payment
      </button>
    </div>
  );
};

export default BookingConfirmation; 