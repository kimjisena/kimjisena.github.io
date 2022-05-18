import React from 'react';
import TopNav from './TopNav';
import SideNav from './SideNav';
import Main from './Main';

export default function Mobile() {
  return (
    <div className='md:hidden'>
        Mobile
        <TopNav />
        <SideNav />
        <Main />
    </div>
  );
}