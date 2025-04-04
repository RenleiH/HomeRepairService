import React from 'react';

const RepairmanList = ({ onBookRepairman }) => {
  const repairmen = [
    {
      id: 1,
      name: 'John Smith',
      rating: 4.8,
      reviews: 128,
      experience: '8 years',
      specialties: ['Electrical Wiring', 'Circuit Repair', 'Smart Home Installation'],
      certifications: ['Licensed Electrician', 'OSHA Certified'],
      responseTime: 'Within 2 hours',
      languages: ['English', 'Spanish'],
      price: 150,
      availability: 'Available Now',
      profileImage: 'https://thispersondoesnotexist.com/image',
      description: 'Experienced electrician specializing in residential and commercial electrical systems. Known for quick response times and thorough work.',
      recentJobs: [
        { type: 'Electrical Panel Upgrade', rating: 5 },
        { type: 'Lighting Installation', rating: 5 },
        { type: 'Circuit Repair', rating: 4.5 }
      ]
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      rating: 4.9,
      reviews: 95,
      experience: '6 years',
      specialties: ['Plumbing Repair', 'Fixture Installation', 'Water Heater Service'],
      certifications: ['Licensed Plumber', 'Backflow Prevention'],
      responseTime: 'Within 3 hours',
      languages: ['English', 'French'],
      price: 120,
      availability: 'Available Today',
      profileImage: 'https://thispersondoesnotexist.com/image',
      description: 'Professional plumber with extensive experience in residential plumbing systems. Committed to providing high-quality service and customer satisfaction.',
      recentJobs: [
        { type: 'Pipe Leak Repair', rating: 5 },
        { type: 'Water Heater Installation', rating: 5 },
        { type: 'Drain Cleaning', rating: 4.8 }
      ]
    },
    {
      id: 3,
      name: 'Michael Brown',
      rating: 4.7,
      reviews: 156,
      experience: '10 years',
      specialties: ['Carpentry', 'Furniture Repair', 'Structural Work'],
      certifications: ['Master Carpenter', 'Safety Certified'],
      responseTime: 'Within 4 hours',
      languages: ['English'],
      price: 200,
      availability: 'Available Tomorrow',
      profileImage: 'https://thispersondoesnotexist.com/image',
      description: 'Skilled carpenter with a focus on quality craftsmanship and attention to detail. Specializes in both repair and custom woodworking projects.',
      recentJobs: [
        { type: 'Door Installation', rating: 5 },
        { type: 'Cabinet Repair', rating: 4.9 },
        { type: 'Structural Repair', rating: 4.7 }
      ]
    }
  ];

  return (
    <div className="space-y-6">
      {repairmen.map((repairman) => (
        <div key={repairman.id} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Left Column - Profile and Basic Info */}
            <div className="flex-shrink-0">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto md:mx-0">
                <img
                  src={`${repairman.profileImage}?${repairman.id}`}
                  alt={repairman.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://robohash.org/${repairman.id}?set=set4`;
                  }}
                />
              </div>
              <div className="mt-4 text-center md:text-left">
                <h3 className="text-xl font-semibold">{repairman.name}</h3>
                <div className="flex items-center justify-center md:justify-start mt-1">
                  <span className="text-yellow-400">★</span>
                  <span className="ml-1">{repairman.rating}</span>
                  <span className="text-gray-500 ml-1">({repairman.reviews} reviews)</span>
                </div>
                <p className="text-green-600 font-medium mt-1">{repairman.availability}</p>
              </div>
            </div>

            {/* Middle Column - Details */}
            <div className="flex-grow">
              <p className="text-gray-600 mb-4">{repairman.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Specialties</h4>
                  <div className="flex flex-wrap gap-2">
                    {repairman.specialties.map((specialty, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Certifications</h4>
                  <div className="flex flex-wrap gap-2">
                    {repairman.certifications.map((cert, index) => (
                      <span key={index} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Recent Jobs</h4>
                  <ul className="space-y-1">
                    {repairman.recentJobs.map((job, index) => (
                      <li key={index} className="flex justify-between">
                        <span className="text-gray-600">{job.type}</span>
                        <span className="text-yellow-400">★ {job.rating}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Additional Info</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>Experience: {repairman.experience}</li>
                    <li>Response Time: {repairman.responseTime}</li>
                    <li>Languages: {repairman.languages.join(', ')}</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column - Price and Action */}
            <div className="flex-shrink-0 flex flex-col justify-between">
              <div className="text-right">
                <p className="text-2xl font-bold text-gray-900">${repairman.price}</p>
                <p className="text-sm text-gray-500">per service</p>
              </div>
              <button
                onClick={() => onBookRepairman(repairman, repairman.price)}
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RepairmanList; 