
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import AIAutomation from './pages/AIAutomation';
import Coaching from './pages/Coaching';
import About from './pages/About';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <div className="bg-zinc-950 text-white min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/ai-automation" element={<AIAutomation />} />
        <Route path="/coaching" element={<Coaching />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
