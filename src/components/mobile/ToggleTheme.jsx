import React from 'react';
import { useState} from 'react';
import { MdNightlight } from 'react-icons/md';
import { MdLightMode } from 'react-icons/md';

export default function ToggleTheme({toggleTheme}) {
  const [light, setLight] = useState(true);

  return (
    <div className={`border-2 ${light? 'border-cool-white' : 'border-cool-yellow'}
                    col-span-1 w-20 mt-3 ml-2 flex 
                    flex-row justify-between h-9 
                    rounded-full bg-cool-black transition-colors duration-700`}
          onClick={() => {toggleTheme(); setLight(!light)}}>
          
        <div className={`${light ? 'order-1' : 'order-2'} rounded-full ${light ? '': ' bg-zinc-700' } transition-[order] duration-500`}>
            <MdNightlight className='text-cool-yellow' size='32px' />
        </div>
        <div className={`${light ? 'order-2' : 'order-1'} rounded-full ${light ? 'bg-zinc-700': '' } transition-[order] duration-500`}>
            <MdLightMode className='text-cool-white' size='32px' />
        </div>
  </div>
  );
}