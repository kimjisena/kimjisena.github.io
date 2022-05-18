import React from 'react';
import About from './About';
import Projects from './Projects';
import Blog from './Blog';
import Contact from './Contact';

export default function MobileMain() {
  return (
    <div>
        Main
        <About />
        <Projects />
        <Blog />
        <Contact />
    </div>
  );
}