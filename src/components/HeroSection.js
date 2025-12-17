// React import not needed with new JSX transform

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-bg">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-15 items-center">
          <div className="text-left">
            <div className="text-gray-600 text-sm mb-5">
              <span>Services</span>
              <span className="mx-2">›</span>
              <span>IT Health Check</span>
            </div>
            <div className="inline-block bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full text-xs font-semibold mb-5">
              3 WEEK PROCESS
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-5">
              Know Exactly Where Your IT Stands.
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-lg">
              2-3 week assessment where healthcare leaders clear actionable insight into their technology minus the jargon.
            </p>
            <button className="bg-primary-500 text-white px-6 py-3 rounded-full font-semibold hover:-translate-y-0.5 transition-transform">
              Take Assessment →
            </button>
          </div>
          <div className="flex justify-center">
            <div className="w-96 h-72 bg-white/80 rounded-2xl flex items-center justify-center shadow-2xl">
              <div className="w-72 h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center relative">
                <div className="w-15 h-15 bg-primary-500 rounded-full flex items-center justify-center text-2xl">
                  ✍️
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;