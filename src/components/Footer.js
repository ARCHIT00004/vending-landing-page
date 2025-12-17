import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-dark text-white pt-15 pb-5">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-15 mb-10">
          <div className="max-w-sm">
            <div className="flex items-center gap-2 font-bold text-lg mb-5">
              <span className="text-primary-500 text-xl">◆</span>
              <span>VENDIGO</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-8">
              Helping healthcare organizations optimize their IT infrastructure with clear, actionable insights.
            </p>
            <div className="flex gap-4">
              <button className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors" aria-label="LinkedIn">
                💼
              </button>
              <button className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors" aria-label="Twitter">
                🐦
              </button>
              <button className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors" aria-label="Email">
                📧
              </button>
              <button className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors" aria-label="Phone">
                📞
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:col-span-2">
            <div>
              <h4 className="text-sm font-semibold text-primary-500 mb-5">SERVICES</h4>
              <ul className="space-y-2.5">
                <li><button className="text-gray-300 text-sm hover:text-white transition-colors text-left">IT Health Check</button></li>
                <li><button className="text-gray-300 text-sm hover:text-white transition-colors text-left">Security Audit</button></li>
                <li><button className="text-gray-300 text-sm hover:text-white transition-colors text-left">Compliance Review</button></li>
                <li><button className="text-gray-300 text-sm hover:text-white transition-colors text-left">Infrastructure Assessment</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-primary-500 mb-5">RESOURCES</h4>
              <ul className="space-y-2.5">
                <li><button className="text-gray-300 text-sm hover:text-white transition-colors text-left">Case Studies</button></li>
                <li><button className="text-gray-300 text-sm hover:text-white transition-colors text-left">White Papers</button></li>
                <li><button className="text-gray-300 text-sm hover:text-white transition-colors text-left">Blog</button></li>
                <li><button className="text-gray-300 text-sm hover:text-white transition-colors text-left">Documentation</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-primary-500 mb-5">ABOUT</h4>
              <ul className="space-y-2.5">
                <li><button className="text-gray-300 text-sm hover:text-white transition-colors text-left">Our Team</button></li>
                <li><button className="text-gray-300 text-sm hover:text-white transition-colors text-left">Careers</button></li>
                <li><button className="text-gray-300 text-sm hover:text-white transition-colors text-left">Privacy Policy</button></li>
                <li><button className="text-gray-300 text-sm hover:text-white transition-colors text-left">Terms of Service</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-primary-500 mb-5">CONTACT</h4>
              <ul className="space-y-2.5">
                <li><button className="text-gray-300 text-sm hover:text-white transition-colors text-left">Get in Touch</button></li>
                <li><button className="text-gray-300 text-sm hover:text-white transition-colors text-left">Support</button></li>
                <li><button className="text-gray-300 text-sm hover:text-white transition-colors text-left">Book a Call</button></li>
                <li><button className="text-gray-300 text-sm hover:text-white transition-colors text-left">Partnership</button></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-5 text-center">
          <p className="text-gray-400 text-sm">&copy; 2024 Vendigo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;