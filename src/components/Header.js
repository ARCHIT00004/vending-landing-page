// React import not needed with new JSX transform
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 left-5 right-5 z-50 bg-dark-800/95 backdrop-blur-lg rounded-b-2xl">
      <div className="max-w-6xl mx-auto px-5">
        <nav className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center gap-2 text-white font-bold text-lg hover:text-primary-500 transition-colors">
            <span className="text-primary-500 text-xl">◆</span>
            <span>VENDIGO</span>
          </Link>
          <div className="hidden md:flex gap-8">
            <Link 
              to="/services" 
              className={`font-medium transition-colors ${
                isActive('/services') ? 'text-primary-500' : 'text-white hover:text-primary-500'
              }`}
            >
              Services
            </Link>
            <Link 
              to="/about" 
              className={`font-medium transition-colors ${
                isActive('/about') ? 'text-primary-500' : 'text-white hover:text-primary-500'
              }`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`font-medium transition-colors ${
                isActive('/contact') ? 'text-primary-500' : 'text-white hover:text-primary-500'
              }`}
            >
              Contact
            </Link>
          </div>
          <Link 
            to="/contact"
            className="bg-gradient-primary text-white px-6 py-3 rounded-full font-semibold hover:-translate-y-0.5 transition-transform"
          >
            Connect to the Team
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;