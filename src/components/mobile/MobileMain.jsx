import React from 'react';
import About from './About';
import Projects from './Projects';
import Blog from './Blog';
import Contact from './Contact';

export default function MobileMain() {
  return (
    <div className='bg-red-300 px-2 mt-12 grid grid-cols-12'>
        <About />
        <Projects />
        <Blog />
        <Contact />
    </div>
  );
}