import React from 'react';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

export default function MobileMain() {
  return (
    <div className='px-2 mt-14 grid grid-cols-12'>
        <About />
        <Projects />
        <Contact />
        <Footer />
    </div>
  );
}