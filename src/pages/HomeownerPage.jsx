import React, { useState } from 'react';
import RepairmanList from '../components/RepairmanList';
import BookingConfirmation from '../components/BookingConfirmation';
import PaymentSection from '../components/PaymentSection';

const HomeownerPage = () => {
  const [showRepairmanList, setShowRepairmanList] = useState(false);
  const [showBookingConfirmation, setShowBookingConfirmation] = useState(false);
  const [showPaymentSection, setShowPaymentSection] = useState(false);
  const [bookingDetails, setBookingDetails] = useState(null);

  const handleFindRepairman = () => {
    setShowRepairmanList(true);
  };

  const handleBookRepairman = (repairman, price) => {
    const serviceType = document.getElementById('service-type-owner').value;
    const address = document.getElementById('address-owner').value;
    const description = document.getElementById('description-owner').value;

    setBookingDetails({
      repairman,
      price,
      serviceType,
      address,
      description
    });
    setShowRepairmanList(false);
    setShowBookingConfirmation(true);
  };

  const handleProceedToPayment = () => {
    setShowBookingConfirmation(false);
    setShowPaymentSection(true);
  };

  const handleCompletePayment = () => {
    alert('Payment completed successfully!');
    window.location.reload();
  };

  return (
    <div className="bg-gray-100">
      <main className="container mx-auto p-8">
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">Homeowner Dashboard</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="service-type-owner" className="block font-semibold mb-2">
                Service Type
              </label>
              <select
                id="service-type-owner"
                className="w-full p-2 border rounded"
              >
                <option value="electrical">Electrical Repair</option>
                <option value="plumbing">Plumbing Repair</option>
                <option value="carpentry">Carpentry Repair</option>
                <option value="appliance">Appliance Repair</option>
              </select>
            </div>
            <div>
              <label htmlFor="address-owner" className="block font-semibold mb-2">
                Repair Address
              </label>
              <input
                type="text"
                id="address-owner"
                placeholder="Enter your address"
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label htmlFor="description-owner" className="block font-semibold mb-2">
                Repair Description
              </label>
              <textarea
                id="description-owner"
                placeholder="Describe the repair issue"
                className="w-full p-2 border rounded"
              />
            </div>
            <button
              type="button"
              onClick={handleFindRepairman}
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Find Service
            </button>
          </form>

          {showRepairmanList && (
            <RepairmanList onBookRepairman={handleBookRepairman} />
          )}

          {showBookingConfirmation && bookingDetails && (
            <BookingConfirmation
              details={bookingDetails}
              onProceedToPayment={handleProceedToPayment}
            />
          )}

          {showPaymentSection && (
            <PaymentSection onCompletePayment={handleCompletePayment} />
          )}
        </section>
      </main>
    </div>
  );
};

export default HomeownerPage; 