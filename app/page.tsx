'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact'; // Contact content is integrated into the footer for this template
import Footer from '@/components/Footer';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <main className="main-container">
        <div className="content-wrapper">
          <Hero />
          <About /> {/* This will contain the 'about' text and 'journey' timeline */}
          <Skills />
          <Projects />
          <Footer /> {/* Footer includes contact email */}
        </div>
      </main>
    </>
  );
}