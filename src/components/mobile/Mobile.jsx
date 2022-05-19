import React from 'react';
import { useState, useRef, useEffect } from 'react';
import TopNav from './TopNav';
import MobileMain from './MobileMain';
import BackToTheTop from './BackToTheTop';

export default function Mobile() {

  const [scroll, setScroll] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);

  const handleScrolling = () => {
    console.log(document.documentElement.scrollTop);
    if (document.documentElement.scrollTop > scrollPos) {
      setScrollPos(document.documentElement.scrollTop);
      setScroll(false);
    } else {
      setScrollPos(document.documentElement.scrollTop);
      setScroll(true);
    }
    // if (document.documentElement.scrollTop > 200) setScroll(true);
    // else setScroll(false);
  }

  useEffect(() => {
    document.addEventListener('scroll', handleScrolling);
    return () => {document.removeEventListener('scroll', handleScrolling)};
  });

  return (
    <div className='sm:hidden'>
        <TopNav />
        <MobileMain />
        <BackToTheTop show={scroll} />
    </div>
  );
}