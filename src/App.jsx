import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MenuHighlights from './components/MenuHighlights';
import Catering from './components/Catering';
import CulinarySchool from './components/CulinarySchool';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <MenuHighlights />
        <Catering />
        <CulinarySchool />
      </main>
      <Footer />
    </div>
  );
}

export default App;
