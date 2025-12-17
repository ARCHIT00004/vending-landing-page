// React import not needed with new JSX transform

const ProcessSection = () => {
  const weeks = [
    {
      week: 'WEEK 1',
      title: 'Discovery',
      description: 'We gather information about your current systems, infrastructure, and business goals.'
    },
    {
      week: 'WEEK 2',
      title: 'Deep Analysis',
      description: 'We dive deep into your infrastructure, policies, and procedures to identify gaps.'
    },
    {
      week: 'WEEK 3',
      title: 'Reporting',
      description: 'We compile findings into clear, strategic recommendations you can act on immediately.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-bg">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-15">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            A Simple, Non-Disruptive 3-Week Process
          </h2>
          <p className="text-gray-600">Fast, structured, low-friction.</p>
        </div>
        
        <div className="flex flex-col lg:flex-row justify-center items-start gap-10 mt-15">
          {weeks.map((week, index) => (
            <div key={index} className="flex flex-col items-center relative">
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center max-w-xs">
                <div className="inline-block bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full text-xs font-semibold mb-4">
                  {week.week}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{week.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{week.description}</p>
              </div>
              {index < weeks.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-5 w-10 h-0.5 bg-gray-300 border-dashed border-t-2 border-gray-300">
                  <div className="absolute -right-1.5 -top-1.5 w-0 h-0 border-l-4 border-l-gray-300 border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;