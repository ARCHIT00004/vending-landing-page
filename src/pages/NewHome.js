// React import not needed with new JSX transform
// New Figma-matched design implementation

const NewHome = () => {
  const criticalAreas = [
    {
      title: 'Security',
      description: 'We audit your Microsoft security tools, review your security policies, and identify vulnerabilities.',
      icon: '🛡️'
    },
    {
      title: 'Compliance',
      description: 'We ensure your HIPAA compliance status and help you maintain regulatory requirements.',
      icon: '📋'
    },
    {
      title: 'Infrastructure',
      description: 'We evaluate network health, identify system risks, and assess capacity for growth.',
      icon: '🏗️'
    },
    {
      title: 'Cost',
      description: 'We identify cost-saving opportunities, spending inefficiencies, and budget optimization.',
      icon: '💬'
    },
    {
      title: 'Operations',
      description: 'We evaluate IT documentation, backup strategies, and operational procedures.',
      icon: '⚙️'
    },
    {
      title: 'Strategy',
      description: 'We assess your IT roadmap and help align technology with business goals.',
      icon: '🔗'
    }
  ];

  const processSteps = [
    {
      week: 'WEEK 1',
      title: 'Discovery',
      description: 'We gather information about your current systems, infrastructure, and business goals.'
    },
    {
      week: 'WEEK 2',
      title: 'Deep Analysis',
      description: 'We dive deep into your infrastructure, policies, and procedures to identify gaps.'
    },
    {
      week: 'WEEK 3',
      title: 'Reporting',
      description: 'We compile findings into clear, strategic recommendations you can act on immediately.'
    }
  ];

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="text-left">
              <div className="text-gray-600 text-sm mb-4 flex items-center gap-2">
                <span>Services</span>
                <span>›</span>
                <span>IT Health Check</span>
              </div>
              
              <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                3 WEEK PROCESS
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Know Exactly<br />
                Where Your IT<br />
                Stands.
              </h1>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                2-3 week assessment where healthcare leaders clear actionable insight into their 
                technology minus the jargon.
              </p>
              
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors flex items-center gap-2">
                Take Assessment
                <span>→</span>
              </button>
            </div>

            {/* Right Image */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-96 h-80 bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 flex items-center justify-center">
                  <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-indigo-100/50"></div>
                    <div className="relative z-10 text-6xl">✍️</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Critical Areas Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              WHAT WE DO
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-blue-500">#6 Critical Areas</span> We Examine.
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every critical part of your IT environment reviewed and explained clearly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {criticalAreas.map((area, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-2xl mb-6">
                  {area.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{area.title}</h3>
                <p className="text-gray-600 leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              A Simple, Non-Disruptive 3-Week Process
            </h2>
            <p className="text-lg text-gray-600">Fast, structured, low-friction.</p>
          </div>

          <div className="relative">
            {/* Process Steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white p-8 rounded-2xl shadow-lg text-center relative z-10">
                    <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                      {step.week}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                  
                  {/* Connecting Line */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-300 z-0">
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-gray-300 rotate-45"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="text-left">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Clear<br />
                Documentation<br />
                You Can Act On.
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                <span className="font-semibold">Structured</span>, low-friction.
              </p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors">
                Take Assessment
              </button>
            </div>

            {/* Right Deliverables */}
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
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-12 rounded-3xl shadow-2xl">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to bring clarity to your IT?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's talk about your IT assessment and how we can help you move forward with confidence.
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transition-colors">
              Book a Call
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewHome;