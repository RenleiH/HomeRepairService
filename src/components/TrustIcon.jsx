import React from 'react';

const TrustIcon = ({ icon, alt, size = 48 }) => {
  return (
    <div 
      className="flex items-center justify-center mb-4"
      style={{ fontSize: `${size}px`, lineHeight: 1 }}
    >
      {icon}
    </div>
  );
};

export default TrustIcon; 