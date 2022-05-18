import React from 'react';

export default function SkillCard({icon, name}) {
  return (
    <div className='flex flex-col justify-center items-center bg-cool-blue rounded-tr-2xl rounded-bl-2xl'>
        {icon}
        <h2 className='text-cool-white'>{name}</h2>
    </div>
  );
}