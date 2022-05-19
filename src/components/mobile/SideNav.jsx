import React from 'react';

export default function SideNav() {
  return (
    <div className='absolute top-full right-0 
                  bg-cool-blue h-[20vh] w-3/4 border
                  rounded-tl-xl rounded-bl-xl'>
      <ul className='flex flex-col mt-4 ml-12'>
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