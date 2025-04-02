import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import HomeownerPage from './pages/HomeownerPage';
import ServiceProviderPage from './pages/ServiceProviderPage';
import FeedbackPage from './pages/FeedbackPage';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/homeowner" element={<HomeownerPage />} />
          <Route path="/service-provider" element={<ServiceProviderPage />} />
          <Route path="/feedback" element={<FeedbackPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App; 