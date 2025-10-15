import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import SkillsSection from './components/Skills';
import ExperienceSection from './components/Experience';
import EducationSection from './components/Education';
import ProjectsSection from './components/Projects';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ContactSection from './components/ContactSection';
function App() {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <About />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
      <ScrollToTop /> 
      
    </div>
    
  );
}

export default App;