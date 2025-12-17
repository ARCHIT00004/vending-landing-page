// React import not needed with new JSX transform

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
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Side - Content */}
          <div className="text-left">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Clear Documentation<br />
              You Can Act On.
            </h2>
            <p className="text-lg text-gray-600 mb-10">
              Structured, low-friction.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors">
              Take Assessment
            </button>
          </div>
          
          {/* Right Side - Deliverables Cards */}
          <div className="space-y-6">
            {deliverables.map((item, index) => (
              <div key={index} className="flex items-center gap-6 bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
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