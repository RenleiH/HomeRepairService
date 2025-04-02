import React, { useState } from 'react';

const FeedbackPage = () => {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your feedback: ${feedback}`);
    setFeedback('');
  };

  return (
    <div className="bg-gray-100">
      <main className="container mx-auto p-8">
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">Feedback</h2>
          <p className="text-gray-600 mb-6">
            We collect user behavior data for optimization and provide a feedback
            portal for your suggestions.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="feedback" className="block font-semibold mb-2">
                Your Feedback
              </label>
              <textarea
                id="feedback"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                className="w-full p-2 border rounded"
                rows="4"
                placeholder="Enter your feedback here"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Submit Feedback
            </button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default FeedbackPage; 