import React from 'react';

export default function SideNavItem({item, link}) {
  return (
    <>
        <li className='border-cool-white border-b-2 mb-1'>
            <a href={link}>
                <h2 className='text-cool-white font-bold font-my-sans text-2xl hover:text-cool-green'>{item}</h2>
            </a>
        </li>
    </>
  )
}
