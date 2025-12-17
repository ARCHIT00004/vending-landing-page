// React import not needed with new JSX transform

const Services = () => {
  const services = [
    {
      title: 'IT Health Check',
      description: 'Comprehensive 3-week assessment of your IT infrastructure, security, and operations.',
      features: ['Security Audit', 'Compliance Review', 'Infrastructure Assessment', 'Cost Analysis'],
      duration: '3 weeks',
      price: 'Contact for pricing'
    },
    {
      title: 'Security Audit',
      description: 'Deep dive into your cybersecurity posture and vulnerability assessment.',
      features: ['Penetration Testing', 'Risk Assessment', 'Policy Review', 'Compliance Check'],
      duration: '2 weeks',
      price: 'Contact for pricing'
    },
    {
      title: 'Cloud Migration',
      description: 'Seamless transition to cloud infrastructure with minimal downtime.',
      features: ['Migration Planning', 'Data Transfer', 'System Integration', 'Staff Training'],
      duration: '4-8 weeks',
      price: 'Contact for pricing'
    },
    {
      title: 'Compliance Review',
      description: 'Ensure your organization meets HIPAA and other regulatory requirements.',
      features: ['HIPAA Assessment', 'Policy Development', 'Staff Training', 'Documentation'],
      duration: '2-3 weeks',
      price: 'Contact for pricing'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-bg">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full text-xs font-semibold mb-5">
              OUR SERVICES
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Professional IT Services for Healthcare
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We provide comprehensive IT solutions designed specifically for healthcare organizations, 
              ensuring security, compliance, and operational excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:-translate-y-1 transition-transform">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded">⏱️ {service.duration}</span>
                    <span className="bg-green-50 text-green-700 px-2 py-1 rounded">💰 {service.price}</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="w-4 h-4 bg-green-500 text-white rounded-full flex items-center justify-center text-xs">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="w-full bg-primary-500 text-white py-3 rounded-lg font-semibold hover:-translate-y-0.5 transition-transform">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every engagement follows our proven methodology to ensure consistent, high-quality results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Discovery</h3>
              <p className="text-gray-600 text-sm">We assess your current state and understand your goals</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚙️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Implementation</h3>
              <p className="text-gray-600 text-sm">We execute the plan with minimal disruption to your operations</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Optimization</h3>
              <p className="text-gray-600 text-sm">We monitor, measure, and continuously improve your systems</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-bg">
        <div className="max-w-4xl mx-auto px-5">
          <div className="bg-gradient-secondary p-15 rounded-2xl text-center text-white shadow-2xl">
            <h2 className="text-4xl font-bold mb-5 leading-tight">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how our services can help your healthcare organization achieve its technology goals.
            </p>
            <button className="bg-white text-primary-500 px-8 py-4 rounded-full font-semibold hover:-translate-y-0.5 transition-transform">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;