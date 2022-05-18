import React from 'react';
import { MdNightlight } from 'react-icons/md';
import { MdLightMode } from 'react-icons/md';

export default function ToggleTheme() {
  return (
    <div className='border-[1px] border-cool-black col-span-1 w-20 mt-3 ml-2 flex flex-row justify-between h-9 rounded-full bg-cool-black'>
        <div className='order-2'>
            <MdLightMode className='text-cool-white' size='32px' />
        </div>
        <div className='order-1'>
            <MdNightlight className='text-[#c0876a]' size='32px' />
        </div>
  </div>
  );
}