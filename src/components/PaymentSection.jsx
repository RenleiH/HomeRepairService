import React from 'react';

const PaymentSection = ({ onCompletePayment }) => {
  return (
    <div className="mt-6">
      <h3 className="text-xl font-bold mb-4">Payment</h3>
      <form className="space-y-4">
        <div>
          <label htmlFor="card-number" className="block font-semibold mb-2">
            Card Number
          </label>
          <input
            type="text"
            id="card-number"
            placeholder="Enter card number"
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="expiry-date" className="block font-semibold mb-2">
            Expiry Date
          </label>
          <input
            type="text"
            id="expiry-date"
            placeholder="MM/YY"
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="cvv" className="block font-semibold mb-2">
            CVV
          </label>
          <input
            type="text"
            id="cvv"
            placeholder="CVV"
            className="w-full p-2 border rounded"
          />
        </div>
        <button
          type="button"
          onClick={onCompletePayment}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default PaymentSection; 