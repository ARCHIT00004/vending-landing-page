// React import not needed with new JSX transform

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-bg">
      <div className="max-w-4xl mx-auto px-5">
        <div className="bg-gradient-secondary p-15 rounded-2xl text-center text-white shadow-2xl">
          <h2 className="text-4xl font-bold mb-5 leading-tight">
            Ready to bring clarity to your IT?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
            Let's talk about your IT assessment and how we can help you move forward with confidence.
          </p>
          <button className="bg-white text-primary-500 px-8 py-4 rounded-full font-semibold hover:-translate-y-0.5 transition-transform">
            Book a Call
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;