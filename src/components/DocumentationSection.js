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
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Content */}
          <div className="text-left">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Clear Documentation<br />
              You Can Act On.
            </h2>
            <p className="text-gray-600 mb-8">
              Structured, low-friction.
            </p>
            <button className="bg-primary-500 text-white px-6 py-3 rounded-lg font-semibold hover:-translate-y-0.5 transition-transform">
              Take Assessment
            </button>
          </div>
          
          {/* Right Side - Simple Deliverables List */}
          <div className="space-y-4">
            {deliverables.map((item, index) => (
              <div key={index} className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
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