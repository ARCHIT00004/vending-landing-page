// React import not needed with new JSX transform

const Header = () => {
  return (
    <header className="fixed top-0 left-5 right-5 z-50 bg-dark-800/95 backdrop-blur-lg rounded-b-2xl">
      <div className="max-w-6xl mx-auto px-5">
        <nav className="flex justify-between items-center py-4">
          <div className="flex items-center gap-2 text-white font-bold text-lg">
            <span className="text-primary-500 text-xl">◆</span>
            <span>VENDIGO</span>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#services" className="text-white font-medium hover:text-primary-500 transition-colors">
              Services
            </a>
            <a href="#about" className="text-white font-medium hover:text-primary-500 transition-colors">
              About
            </a>
            <a href="#contact" className="text-white font-medium hover:text-primary-500 transition-colors">
              Contact
            </a>
          </div>
          <button className="bg-gradient-primary text-white px-6 py-3 rounded-full font-semibold hover:-translate-y-0.5 transition-transform">
            Connect to the Team
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;