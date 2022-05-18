import React from 'react';
import { FaBars } from 'react-icons/fa';

export default function TopNav() {
  return (
    <header className='fixed top-0 w-full h-12 bg-cool-blue'>
      <div className='absolute top-2 left-[88%]'>
        <FaBars className='w-8 h-8 text-cool-white'/>
      </div>
    </header>
  );
}
