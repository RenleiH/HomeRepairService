import React from 'react';

const AvailableJobs = () => {
  const services = [
    {
      id: 1,
      type: 'Electrical Repair',
      description: 'Professional electrical repair services including wiring, circuit issues, and fixture installations.',
      skills: ['Electrical Wiring', 'Circuit Troubleshooting', 'Safety Compliance'],
      estimatedTime: '2-4 hours',
      tools: ['Multimeter', 'Wire Strippers', 'Voltage Tester'],
      price: 150,
      location: '123 Main St, Boston, MA',
      urgency: 'High',
      customerNotes: 'Lights flickering in living room, need immediate attention'
    },
    {
      id: 2,
      type: 'Plumbing Repair',
      description: 'Expert plumbing services for leaks, clogs, and fixture installations.',
      skills: ['Pipe Repair', 'Fixture Installation', 'Drain Cleaning'],
      estimatedTime: '1-3 hours',
      tools: ['Pipe Wrench', 'Plunger', 'Drain Snake'],
      price: 120,
      location: '456 Oak Ave, Cambridge, MA',
      urgency: 'Medium',
      customerNotes: 'Kitchen sink leaking, slow drainage'
    },
    {
      id: 3,
      type: 'Carpentry Repair',
      description: 'Skilled carpentry work for furniture repair, door adjustments, and structural fixes.',
      skills: ['Woodworking', 'Furniture Repair', 'Structural Assessment'],
      estimatedTime: '3-5 hours',
      tools: ['Saw', 'Hammer', 'Measuring Tape'],
      price: 200,
      location: '789 Pine Rd, Somerville, MA',
      urgency: 'Low',
      customerNotes: 'Bedroom door not closing properly'
    },
    {
      id: 4,
      type: 'Appliance Repair',
      description: 'Specialized repair services for household appliances and HVAC systems.',
      skills: ['Appliance Diagnosis', 'HVAC Repair', 'Electrical Systems'],
      estimatedTime: '2-4 hours',
      tools: ['Diagnostic Tools', 'Replacement Parts', 'Safety Equipment'],
      price: 180,
      location: '321 Elm St, Brookline, MA',
      urgency: 'High',
      customerNotes: 'Refrigerator not cooling properly'
    }
  ];

  const getUrgencyColor = (urgency) => {
    switch (urgency.toLowerCase()) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Available Service Requests</h2>
      <div className="space-y-6">
        {services.map((service) => (
          <div key={service.id} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{service.type}</h3>
                <p className="text-gray-600 mt-1">{service.description}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getUrgencyColor(service.urgency)}`}>
                {service.urgency} Priority
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Required Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.skills.map((skill, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Required Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.tools.map((tool, index) => (
                      <span key={index} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Customer Notes</h4>
                  <p className="text-gray-600 italic">"{service.customerNotes}"</p>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-700">Location</h4>
                    <p className="text-gray-600">{service.location}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Estimated Time</h4>
                    <p className="text-gray-600">{service.estimatedTime}</p>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-700 mb-2">Service Fee</h4>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-gray-900">${service.price}</span>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                      Accept Job
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableJobs; 