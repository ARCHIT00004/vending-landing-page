// React import not needed with new JSX transform

const Contact = () => {
  const contactMethods = [
    {
      icon: '📞',
      title: 'Phone',
      details: '+1 (555) 123-4567',
      description: 'Call us during business hours'
    },
    {
      icon: '📧',
      title: 'Email',
      details: 'hello@vendigo.com',
      description: 'We respond within 24 hours'
    },
    {
      icon: '📍',
      title: 'Office',
      details: '123 Healthcare Blvd, Suite 100',
      description: 'Schedule an in-person meeting'
    },
    {
      icon: '💬',
      title: 'Live Chat',
      details: 'Available on our website',
      description: 'Instant support during business hours'
    }
  ];

  const offices = [
    {
      city: 'New York',
      address: '123 Healthcare Blvd, Suite 100\nNew York, NY 10001',
      phone: '+1 (555) 123-4567',
      email: 'ny@vendigo.com'
    },
    {
      city: 'Los Angeles',
      address: '456 Medical Center Dr, Floor 5\nLos Angeles, CA 90210',
      phone: '+1 (555) 987-6543',
      email: 'la@vendigo.com'
    },
    {
      city: 'Chicago',
      address: '789 Hospital Way, Building A\nChicago, IL 60601',
      phone: '+1 (555) 456-7890',
      email: 'chicago@vendigo.com'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-bg">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full text-xs font-semibold mb-5">
              GET IN TOUCH
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Let's Discuss Your IT Needs
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your healthcare organization's technology? Our experts are here to help. 
              Reach out to us and let's start the conversation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg text-center hover:-translate-y-1 transition-transform">
                <div className="text-4xl mb-4">{method.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-primary-500 font-medium mb-2">{method.details}</p>
                <p className="text-gray-600 text-sm">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="john@hospital.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Organization</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Your Healthcare Organization"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Interest</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                    <option>IT Health Check</option>
                    <option>Security Audit</option>
                    <option>Cloud Migration</option>
                    <option>Compliance Review</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    rows="4" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Tell us about your IT challenges and goals..."
                  ></textarea>
                </div>
                
                <button className="w-full bg-primary-500 text-white py-3 rounded-lg font-semibold hover:-translate-y-0.5 transition-transform">
                  Send Message
                </button>
              </form>
            </div>

            {/* Office Locations */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Locations</h2>
              <div className="space-y-6">
                {offices.map((office, index) => (
                  <div key={index} className="bg-white p-6 rounded-2xl shadow-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{office.city} Office</h3>
                    <div className="space-y-2 text-gray-600">
                      <div className="flex items-start gap-2">
                        <span>📍</span>
                        <span className="whitespace-pre-line">{office.address}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>📞</span>
                        <span>{office.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>📧</span>
                        <span>{office.email}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg mt-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Business Hours</h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Emergency Support Only</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-5">
          <div className="bg-gradient-secondary p-15 rounded-2xl text-center text-white shadow-2xl">
            <h2 className="text-4xl font-bold mb-5 leading-tight">
              Ready to Get Started?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
              Schedule a free consultation to discuss your healthcare organization's IT needs.
            </p>
            <button className="bg-white text-primary-500 px-8 py-4 rounded-full font-semibold hover:-translate-y-0.5 transition-transform">
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;