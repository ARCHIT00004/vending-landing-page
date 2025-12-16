import React from 'react';

const DocumentationSection = () => {
  const deliverables = [
    {
      title: 'Executive Summary',
      description: 'Top-level insights and recommendations'
    },
    {
      title: 'Scorecard',
      description: 'Detailed scoring across all assessment areas'
    },
    {
      title: 'Full Findings Report',
      description: 'Complete technical analysis and recommendations'
    },
    {
      title: '90-Day Roadmap',
      description: 'Prioritized action plan with timelines'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-15 items-center">
          <div className="text-left">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Clear Documentation You Can Act On.
            </h2>
            <p className="text-gray-600 mb-8">Structured, low-friction.</p>
            <button className="bg-primary-500 text-white px-6 py-3 rounded-full font-semibold hover:-translate-y-0.5 transition-transform">
              Take Assessment
            </button>
          </div>
          
          <div className="space-y-5">
            {deliverables.map((item, index) => (
              <div key={index} className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-md">
                <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocumentationSection;