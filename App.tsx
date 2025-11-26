import React from 'react';
import Hero from './components/Hero';
import Courses from './components/Courses';
import WhyCalculus from './components/WhyCalculus';
import Instructor from './components/Instructor';
import Testimonials from './components/Testimonials';
import AiTutor from './components/AiTutor';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 selection:bg-violet-200">
      <Hero />
      <Courses />
      <WhyCalculus />
      {/* AI Tutor Section - Adding value with Gemini API */}
      <AiTutor />
      <Instructor />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;