import React from 'react';
import SideNavItem from './SideNavItem';

const items = {
  about: '#about',
  projects: '#projects',
  contact: '#contact'
}

export default function SideNav() {
  return (
    <div className='absolute top-full right-0 
                  bg-cool-blue w-3/4 border
                  rounded-tl-xl rounded-bl-xl h-40'>
      <ul className='flex flex-col mt-5 ml-12'>
        {Object.keys(items).map(key => {
          return <SideNavItem key={key} item={key} link={items[key]} />
        })}       
      </ul>
    </div>
  );
}