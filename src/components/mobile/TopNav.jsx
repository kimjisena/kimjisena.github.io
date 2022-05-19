import React from 'react';
import ToggleTheme from './ToggleTheme';
import SideNav from './SideNav';
import {VscMenu} from 'react-icons/vsc';
import { VscChromeClose } from 'react-icons/vsc';

export default function TopNav() {
  return (
    <header className='fixed top-0 w-full h-14 bg-cool-blue'>
      <div className='grid grid-cols-3 h-full'>
        <ToggleTheme />
        <h1 className='text-center text-cool-white font-bold font-my-sans text-2xl align-middle mt-3 col-span-1'>{'<jisena />'}</h1>
        <div className='col-span-1 flex flex-row-reverse pr-4'>
          <div className='mt-3'>
            <VscChromeClose className='text-cool-white' size='32px'/>
          </div>
        </div>
      </div>
      <SideNav />
    </header>
  );
}