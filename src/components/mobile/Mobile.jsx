import React from 'react';
import TopNav from './TopNav';
import SideNav from './SideNav';

export default function Mobile() {
  return (
    <div className='md:hidden'>
        <TopNav />
        <SideNav />
    </div>
  );
}