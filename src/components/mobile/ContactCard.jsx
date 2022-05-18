import React from 'react';

export default function ContactCard({icon, name}) {
  return (

    <div className='flex flex-col justify-center items-center bg-cool-blue rounded-2xl w-20'>
        {icon}
    <h2 className='text-cool-white'>{name}</h2>
</div>
  );
}
