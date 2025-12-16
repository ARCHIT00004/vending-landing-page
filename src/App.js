import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CriticalAreas from './components/CriticalAreas';
import ProcessSection from './components/ProcessSection';
import DocumentationSection from './components/DocumentationSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <CriticalAreas />
      <ProcessSection />
      <DocumentationSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;