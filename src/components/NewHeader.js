// React import not needed with new JSX transform
import { Link, useLocation } from 'react-router-dom';

const NewHeader = () => {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed top-4 left-4 right-4 z-50">
      <div className="bg-gray-900/95 backdrop-blur-lg rounded-2xl shadow-2xl">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 text-white font-bold text-lg hover:text-blue-400 transition-colors">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">◆</span>
              </div>
              <span className="text-xl">VENDIGO</span>
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              <Link 
                to="/services" 
                className={`font-medium transition-colors ${
                  isActive('/services') ? 'text-blue-400' : 'text-white hover:text-blue-400'
                }`}
              >
                Services ▼
              </Link>
              <Link 
                to="/about" 
                className={`font-medium transition-colors ${
                  isActive('/about') ? 'text-blue-400' : 'text-white hover:text-blue-400'
                }`}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className={`font-medium transition-colors ${
                  isActive('/contact') ? 'text-blue-400' : 'text-white hover:text-blue-400'
                }`}
              >
                Contact
              </Link>
            </div>

            {/* CTA Button */}
            <Link 
              to="/contact"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
            >
              Connect to the Team
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default NewHeader;