// React import not needed with new JSX transform
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NewHeader from './components/NewHeader';
import NewFooter from './components/NewFooter';
import NewHome from './pages/NewHome';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <NewHeader />
        <Routes>
          <Route path="/" element={<NewHome />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <NewFooter />
      </div>
    </Router>
  );
}

export default App;