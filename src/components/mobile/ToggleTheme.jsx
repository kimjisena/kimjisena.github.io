import React from 'react';
import { useState } from 'react';
import { MdNightlight } from 'react-icons/md';
import { MdLightMode } from 'react-icons/md';

export default function ToggleTheme({toggleTheme}) {
  const [light, setLight] = useState(true);

  return (
    <div className='border-[1px] border-cool-black 
                    col-span-1 w-20 mt-3 ml-2 flex 
                    flex-row justify-between h-9 
                    rounded-full bg-cool-black'
          onClick={() => {toggleTheme(); setLight(!light)}}>
          
        <div className={`${light ? '' : 'order-2'}`}>
            <MdNightlight className='text-[#c0876a]' size='32px' />
        </div>
        <div className='order-1'>
            <MdLightMode className='text-cool-white' size='32px' />
        </div>
  </div>
  );
}