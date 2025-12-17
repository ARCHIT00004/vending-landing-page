// React import not needed with new JSX transform

const About = () => {
  const team = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Chief Technology Officer',
      experience: '15+ years in healthcare IT',
      specialties: ['HIPAA Compliance', 'EHR Systems', 'Cloud Migration']
    },
    {
      name: 'Michael Chen',
      role: 'Senior Security Consultant',
      experience: '12+ years in cybersecurity',
      specialties: ['Penetration Testing', 'Risk Assessment', 'Security Audits']
    },
    {
      name: 'Lisa Rodriguez',
      role: 'Infrastructure Specialist',
      experience: '10+ years in IT infrastructure',
      specialties: ['Network Design', 'Cloud Architecture', 'System Integration']
    },
    {
      name: 'David Kim',
      role: 'Compliance Expert',
      experience: '8+ years in healthcare compliance',
      specialties: ['HIPAA', 'HITECH', 'Regulatory Affairs']
    }
  ];

  const stats = [
    { number: '500+', label: 'Healthcare Organizations Served' },
    { number: '15+', label: 'Years of Experience' },
    { number: '99.9%', label: 'Uptime Achieved' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="min-h-screen bg-gradient-bg">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full text-xs font-semibold mb-5">
              ABOUT VENDIGO
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Healthcare IT Experts You Can Trust
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              For over 15 years, we've been helping healthcare organizations optimize their technology 
              infrastructure while maintaining the highest standards of security and compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary-500 mb-2">{stat.number}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                We believe that healthcare organizations should focus on what they do best - caring for patients. 
                That's why we take care of the technology that supports their mission.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our team of experts brings deep healthcare industry knowledge combined with cutting-edge 
                technology expertise to deliver solutions that are both innovative and compliant.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm">✓</span>
                  <span className="text-gray-700">HIPAA Compliant Solutions</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm">✓</span>
                  <span className="text-gray-700">24/7 Support & Monitoring</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm">✓</span>
                  <span className="text-gray-700">Proven Track Record</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Vendigo?</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Healthcare-focused expertise</li>
                <li>• Comprehensive security approach</li>
                <li>• Regulatory compliance knowledge</li>
                <li>• Scalable solutions</li>
                <li>• Ongoing support and maintenance</li>
                <li>• Cost-effective implementations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our experienced professionals bring decades of combined expertise in healthcare IT.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-2xl text-center">
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-primary-500">👤</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-primary-500 font-medium text-sm mb-2">{member.role}</p>
                <p className="text-gray-600 text-xs mb-3">{member.experience}</p>
                <div className="space-y-1">
                  {member.specialties.map((specialty, idx) => (
                    <div key={idx} className="bg-white px-2 py-1 rounded text-xs text-gray-600">
                      {specialty}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-bg">
        <div className="max-w-4xl mx-auto px-5">
          <div className="bg-gradient-secondary p-15 rounded-2xl text-center text-white shadow-2xl">
            <h2 className="text-4xl font-bold mb-5 leading-tight">
              Ready to Work with Healthcare IT Experts?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how our team can help your organization achieve its technology goals.
            </p>
            <button className="bg-white text-primary-500 px-8 py-4 rounded-full font-semibold hover:-translate-y-0.5 transition-transform">
              Contact Our Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;