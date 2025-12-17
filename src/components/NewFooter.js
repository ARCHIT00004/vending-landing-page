// React import not needed with new JSX transform

const NewFooter = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">◆</span>
              </div>
              <span className="text-xl font-bold">VENDIGO</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Helping healthcare organizations optimize their IT infrastructure with clear, actionable insights.
            </p>
            <div className="flex gap-4">
              <button className="w-10 h-10 bg-gray-800 hover:bg-blue-500 rounded-full flex items-center justify-center transition-colors">
                💼
              </button>
              <button className="w-10 h-10 bg-gray-800 hover:bg-blue-500 rounded-full flex items-center justify-center transition-colors">
                🐦
              </button>
              <button className="w-10 h-10 bg-gray-800 hover:bg-blue-500 rounded-full flex items-center justify-center transition-colors">
                📧
              </button>
              <button className="w-10 h-10 bg-gray-800 hover:bg-blue-500 rounded-full flex items-center justify-center transition-colors">
                📞
              </button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-blue-400">SERVICES</h4>
            <ul className="space-y-3">
              <li><button className="text-gray-400 hover:text-white transition-colors text-left">IT Health Check</button></li>
              <li><button className="text-gray-400 hover:text-white transition-colors text-left">Security Audit</button></li>
              <li><button className="text-gray-400 hover:text-white transition-colors text-left">Compliance Review</button></li>
              <li><button className="text-gray-400 hover:text-white transition-colors text-left">Infrastructure Assessment</button></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-blue-400">RESOURCES</h4>
            <ul className="space-y-3">
              <li><button className="text-gray-400 hover:text-white transition-colors text-left">Case Studies</button></li>
              <li><button className="text-gray-400 hover:text-white transition-colors text-left">White Papers</button></li>
              <li><button className="text-gray-400 hover:text-white transition-colors text-left">Blog</button></li>
              <li><button className="text-gray-400 hover:text-white transition-colors text-left">Documentation</button></li>
            </ul>
          </div>

          {/* About & Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-blue-400">ABOUT</h4>
            <ul className="space-y-3 mb-8">
              <li><button className="text-gray-400 hover:text-white transition-colors text-left">Our Team</button></li>
              <li><button className="text-gray-400 hover:text-white transition-colors text-left">Careers</button></li>
              <li><button className="text-gray-400 hover:text-white transition-colors text-left">Privacy Policy</button></li>
            </ul>
            
            <h4 className="text-lg font-semibold mb-6 text-blue-400">CONTACT</h4>
            <ul className="space-y-3">
              <li><button className="text-gray-400 hover:text-white transition-colors text-left">Get in Touch</button></li>
              <li><button className="text-gray-400 hover:text-white transition-colors text-left">Support</button></li>
              <li><button className="text-gray-400 hover:text-white transition-colors text-left">Book a Call</button></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500">&copy; 2024 Vendigo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default NewFooter;