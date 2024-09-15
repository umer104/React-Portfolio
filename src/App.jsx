import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header'; 
import Projects from './components/pages/Projects';
import Resume from './components/pages/Resume';
import Work from './components/pages/Work';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import PageTransitions from './components/PageTransitions';
import StairsAnimations from './components/StairsAnimations';


function App({ childern }) {
  return (
    <div className="App">
      <Header />
      <StairsAnimations />
      <PageTransitions>{childern}</PageTransitions>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
