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
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Side - Content */}
          <div className="text-left relative z-10">
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              FAST DELIVERABLES
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Clear<br />
              <span className="text-gray-900">Documentation</span><br />
              <span className="text-gray-500">You Can Act On.</span>
            </h2>
            <p className="text-lg text-gray-600 mb-2">
              <span className="font-semibold">Fast</span> <span className="font-normal">structured,</span> <span className="font-semibold">low-friction.</span>
            </p>
            <button className="bg-primary-500 text-white px-8 py-4 rounded-full font-semibold hover:-translate-y-0.5 transition-transform mt-6">
              Take Assessment
            </button>
          </div>
          
          {/* Right Side - Deliverables with Connecting Line */}
          <div className="relative">
            {/* Vertical Connecting Line */}
            <div className="absolute left-8 top-12 bottom-12 w-0.5 bg-blue-200 hidden lg:block"></div>
            
            {/* Deliverables */}
            <div className="space-y-6">
              {deliverables.map((item, index) => (
                <div key={index} className="relative flex items-start gap-6">
                  {/* Connector Circle */}
                  <div className="relative z-10 w-16 h-16 bg-white rounded-full border-4 border-blue-100 flex items-center justify-center flex-shrink-0 shadow-md">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      ✓
                    </div>
                  </div>
                  
                  {/* Content Card */}
                  <div className="bg-white p-6 rounded-2xl shadow-lg flex-1 border border-gray-100 hover:shadow-xl transition-shadow">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                  
                  {/* Connecting Line to Next Item */}
                  {index < deliverables.length - 1 && (
                    <div className="absolute left-8 top-16 w-0.5 h-8 bg-blue-200 hidden lg:block"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-indigo-300/30 rounded-full blur-3xl -translate-y-48 translate-x-48"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-100/40 to-indigo-200/40 rounded-full blur-2xl translate-y-32 -translate-x-32"></div>
    </section>
  );
};

export default DocumentationSection;