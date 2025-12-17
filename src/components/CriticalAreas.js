// React import not needed with new JSX transform

const CriticalAreas = () => {
  const areas = [
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

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-15">
          <div className="inline-block bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full text-xs font-semibold mb-5">
            WHAT WE DO
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
            <span className="text-primary-500">#6 Critical Areas</span> We Examine.
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Every critical part of your IT environment reviewed and explained clearly.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {areas.map((area, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:-translate-y-1 transition-transform">
              <div className="w-15 h-15 bg-blue-50 rounded-2xl flex items-center justify-center text-2xl mb-5">
                {area.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{area.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CriticalAreas;