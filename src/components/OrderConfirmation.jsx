import React from 'react';

const OrderConfirmation = ({ order, onClose }) => {
  return (
    <>
      <div className="overlay" onClick={onClose}></div>
      <div className="modal">
        <h2 className="text-2xl font-bold mb-4">Order Confirmation</h2>
        <div className="space-y-2">
          <p><span className="font-semibold">Service Type:</span> {order.type}</p>
          <p><span className="font-semibold">Address:</span> {order.address}</p>
          <p><span className="font-semibold">Order ID:</span> {order.id}</p>
        </div>
        <button
          onClick={onClose}
          className="mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Close
        </button>
      </div>
    </>
  );
};

export default OrderConfirmation; 