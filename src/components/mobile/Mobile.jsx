import React from 'react';
import TopNav from './TopNav';
import SideNav from './SideNav';
import MobileMain from './MobileMain';
import BackToTheTop from './BackToTheTop';

export default function Mobile() {
  return (
    <div className='md:hidden'>
        <TopNav />
        <SideNav />
        <MobileMain />
        <BackToTheTop />
    </div>
  );
}