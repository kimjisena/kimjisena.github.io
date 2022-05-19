import React from 'react';
import { useState, useRef, useEffect } from 'react';
import TopNav from './TopNav';
import MobileMain from './MobileMain';
import BackToTheTop from './BackToTheTop';

export default function Mobile() {

  const [scroll, setScroll] = useState(false);

  const handleScrolling = () => {
    setScroll(true);
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScrolling);
    return () => {window.removeEventListener('scroll', handleScrolling)};
  });

  return (
    <div className='sm:hidden'>
        <TopNav />
        <MobileMain />
        <BackToTheTop show={scroll} />
    </div>
  );
}