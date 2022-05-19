import React from 'react';

export default function SideNav() {
  return (
    <div className='absolute top-full right-0 
                  bg-cool-blue h-[80vh] w-3/4 
                  border-t-cool-white border
                  rounded-tl-xl rounded-bl-xl'>
      <ul>
        <li>about</li>
        <li>projects</li>
        <li>contact</li>        
      </ul>
    </div>
  );
}