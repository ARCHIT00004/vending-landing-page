// React import not needed with new JSX transform
import HeroSection from '../components/HeroSection';
import CriticalAreas from '../components/CriticalAreas';
import ProcessSection from '../components/ProcessSection';
import DocumentationSection from '../components/DocumentationSection';
import CTASection from '../components/CTASection';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <CriticalAreas />
      <ProcessSection />
      <DocumentationSection />
      <CTASection />
    </div>
  );
};

export default Home;