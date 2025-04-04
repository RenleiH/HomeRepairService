import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import RepairmanList from '../components/RepairmanList';
import BookingConfirmation from '../components/BookingConfirmation';
import PaymentSection from '../components/PaymentSection';
import OrderConfirmation from '../components/OrderConfirmation';

const HomeownerPage = () => {
  const navigate = useNavigate();
  const [showRepairmanList, setShowRepairmanList] = useState(false);
  const [showBookingConfirmation, setShowBookingConfirmation] = useState(false);
  const [showPaymentSection, setShowPaymentSection] = useState(false);
  const [showOrderConfirmation, setShowOrderConfirmation] = useState(false);
  const [bookingDetails, setBookingDetails] = useState(null);
  const [mediaFiles, setMediaFiles] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);
  const [formData, setFormData] = useState({
    serviceType: '',
    address: '',
    description: '',
  });

  const handleFindRepairman = () => {
    const serviceType = document.getElementById('service-type-owner').value;
    const address = document.getElementById('address-owner').value;
    const description = document.getElementById('description-owner').value;

    setFormData({
      serviceType,
      address,
      description,
    });

    // Navigate to repairmen list page
    navigate('/repairmen', { state: { formData: { serviceType, address, description }, mediaFiles: previewUrls } });
  };

  const handleBookRepairman = (repairman, price) => {
    setBookingDetails({
      repairman,
      price,
      serviceType: formData.serviceType,
      address: formData.address,
      description: formData.description,
      mediaFiles: previewUrls
    });
    setShowRepairmanList(false);
    setShowBookingConfirmation(true);
  };

  const handleProceedToPayment = () => {
    setShowBookingConfirmation(false);
    setShowPaymentSection(true);
  };

  const handleCompletePayment = () => {
    setShowPaymentSection(false);
    setShowOrderConfirmation(true);
  };

  const handleMediaUpload = (event) => {
    const files = Array.from(event.target.files);
    setMediaFiles(files);
    
    // Create preview URLs for images
    const urls = files.map(file => URL.createObjectURL(file));
    setPreviewUrls(urls);
  };

  const removeMedia = (index) => {
    const newFiles = [...mediaFiles];
    const newUrls = [...previewUrls];
    newFiles.splice(index, 1);
    newUrls.splice(index, 1);
    setMediaFiles(newFiles);
    setPreviewUrls(newUrls);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Homeowner Dashboard</h1>
      </div>
      <main className="container mx-auto p-8">
        <section className="bg-white p-8 rounded-lg shadow-md">
          {!showOrderConfirmation ? (
            <>
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
                    placeholder="Please provide a detailed description of the repair issue. Include information such as:
• When did the problem first occur?
• What are the specific symptoms or issues you're experiencing?
• Have you attempted any repairs yourself?
• Are there any unusual sounds, smells, or visual signs?
• How frequently does the problem occur?
• What makes the problem better or worse?
• Have you noticed any patterns or triggers?
• Are there any safety concerns?

The more details you provide, the more accurate the quote will be."
                    className="w-full p-2 border rounded h-48"
                  />
                  <p className="mt-1 text-sm text-gray-500">
                    Detailed descriptions help repairmen better understand the issue and provide more accurate quotes.
                  </p>
                </div>
                
                {/* Media Upload Section */}
                <div className="space-y-4">
                  <label className="block font-semibold mb-2">
                    Upload Photos/Video
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <input
                      type="file"
                      accept="image/*,video/*"
                      multiple
                      onChange={handleMediaUpload}
                      className="hidden"
                      id="media-upload"
                    />
                    <label
                      htmlFor="media-upload"
                      className="cursor-pointer inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                    >
                      Choose Files
                    </label>
                    <p className="mt-2 text-sm text-gray-500">
                      Upload photos or videos of the repair issue (max 5 files)
                    </p>
                  </div>

                  {/* Preview Section */}
                  {previewUrls.length > 0 && (
                    <div className="mt-4">
                      <h3 className="text-lg font-semibold mb-2">Uploaded Media</h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {previewUrls.map((url, index) => (
                          <div key={index} className="relative group">
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
                            <button
                              type="button"
                              onClick={() => removeMedia(index)}
                              className="absolute top-2 right-2 bg-red-600 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
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
                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4">Available Services</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Service Details Card */}
                    <div className="bg-white p-6 rounded-lg shadow-md border">
                      <h4 className="text-lg font-semibold mb-2">Service Details</h4>
                      <div className="space-y-2">
                        <p><span className="font-medium">Type:</span> {formData.serviceType}</p>
                        <p><span className="font-medium">Location:</span> {formData.address}</p>
                        <p><span className="font-medium">Description:</span> {formData.description}</p>
                      </div>
                    </div>

                    {/* Available Repairmen */}
                    <div className="bg-white p-6 rounded-lg shadow-md border">
                      <h4 className="text-lg font-semibold mb-2">Available Repairmen</h4>
                      <RepairmanList onBookRepairman={handleBookRepairman} />
                    </div>
                  </div>
                </div>
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
            </>
          ) : (
            <OrderConfirmation details={bookingDetails} />
          )}
        </section>
      </main>
    </div>
  );
};

export default HomeownerPage; 