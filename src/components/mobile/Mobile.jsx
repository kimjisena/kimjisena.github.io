import React from 'react';
import { useState, useEffect } from 'react';
import TopNav from './TopNav';
import MobileMain from './MobileMain';
import BackToTheTop from './BackToTheTop';

export default function Mobile() {

  const [scroll, setScroll] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);

  const handleScrolling = () => {

    if (document.documentElement.scrollTop > scrollPos) {
      setScrollPos(document.documentElement.scrollTop);
      setScroll(false);
    } else {
      setScrollPos(document.documentElement.scrollTop);
      setScroll(true);
    }
  }

  useEffect(() => {
    document.addEventListener('scroll', handleScrolling);
    return () => {document.removeEventListener('scroll', handleScrolling)};
  });

  useEffect(() => {
    document.body.className = 'bg-cool-white';
  });

  return (
    <div className='sm:hidden'>
        <TopNav />
        <MobileMain />
        <BackToTheTop show={scroll} />
    </div>
  );
}