import React from 'react';
import {MdDarkMode} from 'react-icons/md';
import { MdNightlightRound } from 'react-icons/md';
import { MdNightlight } from 'react-icons/md';
import { MdLightMode } from 'react-icons/md';
import {VscMenu} from 'react-icons/vsc';

export default function TopNav() {
  return (
    <header className='fixed top-0 w-full h-14 bg-cool-blue'>
      <div className='grid grid-cols-3 h-full'>
      <div className='border-[1px] border-cool-black col-span-1 w-20 mt-3 ml-2 flex flex-row justify-between h-9 rounded-full bg-cool-black'>
        <div className='order-2'>
          <MdLightMode className='text-cool-white' size='32px' />
        </div>
        <div className='order-1'>
          <MdDarkMode className='text-[#c0876a]' size='32px' />
        </div>
      </div>
      <h1 className='text-center text-cool-white font-bold font-my-sans text-2xl align-middle mt-3 col-span-1'>{'<jisena />'}</h1>
      <div className='col-span-1 flex flex-row-reverse pr-4'>
        <div className='mt-3'>
          <VscMenu className='text-cool-white' size='32px'/>
        </div>
      </div>
      </div>

    </header>
  );
}
