import React from 'react';

const BookingConfirmation = ({ details, onProceedToPayment }) => {
  // Calculate total price
  const laborCost = details.price * 0.7; // 70% of total price
  const partsCost = details.price * 0.3; // 30% of total price
  const tax = details.price * 0.1; // 10% tax
  const total = details.price + tax;

  return (
    <div className="bg-white p-8 rounded-lg shadow-md mt-6">
      <h2 className="text-2xl font-bold mb-6">Booking Confirmation</h2>
      
      <div className="space-y-6">
        {/* Service Details */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Service Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Service Type</p>
              <p className="font-medium">{details.serviceType}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Repairman</p>
              <p className="font-medium">{details.repairman.name}</p>
            </div>
          </div>
        </div>

        {/* Location Details */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Location Details</h3>
          <div>
            <p className="text-sm text-gray-500">Address</p>
            <p className="font-medium">{details.address}</p>
          </div>
        </div>

        {/* Problem Description */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Problem Description</h3>
          <p className="text-gray-700 whitespace-pre-line">{details.description}</p>
        </div>

        {/* Media Files */}
        {details.mediaFiles && details.mediaFiles.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold mb-4">Uploaded Media</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {details.mediaFiles.map((url, index) => (
                <div key={index} className="relative">
                  {url.includes('video') ? (
                    <video
                      src={url}
                      className="w-full h-32 object-cover rounded"
                      controls
                    />
                  ) : (
                    <img
                      src={url}
                      alt={`Upload ${index + 1}`}
                      className="w-full h-32 object-cover rounded"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Price Breakdown */}
        <div className="border-t pt-6">
          <h3 className="text-lg font-semibold mb-4">Price Breakdown</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Labor Cost</span>
              <span className="font-medium">${laborCost.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Parts & Materials (Estimated)</span>
              <span className="font-medium">${partsCost.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-medium">${details.price.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Tax (10%)</span>
              <span className="font-medium">${tax.toFixed(2)}</span>
            </div>
            <div className="border-t pt-2 mt-2">
              <div className="flex justify-between">
                <span className="font-semibold">Total</span>
                <span className="font-bold text-lg">${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Notes */}
        <div className="bg-yellow-50 p-4 rounded-lg">
          <h4 className="font-semibold text-yellow-800 mb-2">Important Notes:</h4>
          <ul className="list-disc list-inside text-yellow-700 space-y-1">
            <li>Final parts cost may vary based on actual requirements</li>
            <li>Additional charges may apply for complex repairs</li>
            <li>Payment is required before service begins</li>
            <li>24-hour cancellation policy applies</li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-4">
          <button
            onClick={() => window.history.back()}
            className="bg-gray-200 text-gray-800 px-6 py-2 rounded hover:bg-gray-300"
          >
            Back
          </button>
          <button
            onClick={onProceedToPayment}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation; 