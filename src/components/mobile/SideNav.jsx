import React from 'react';

export default function SideNav() {
  return (
    <div className='absolute top-full right-0 
                  bg-cool-blue w-3/4 border
                  rounded-tl-xl rounded-bl-xl h-40'>
      <ul className='flex flex-col mt-5 ml-12'>
        <li className='border-cool-white border-b-2 mb-1'>
          <h2 className='text-cool-white font-bold font-my-sans text-2xl'>about</h2>
        </li>
        <li className='border-cool-white border-b-2 mb-1'>
          <h2 className='text-cool-white font-bold font-my-sans text-2xl'>projects</h2>
        </li>
        <li className='border-cool-white border-b-2 mb-1'>
          <h2 className='text-cool-white font-bold font-my-sans text-2xl'>contact</h2>
        </li>        
      </ul>
    </div>
  );
}