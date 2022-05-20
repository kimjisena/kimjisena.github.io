import React from 'react';

export default function HLevel2({theme, text, children}) {
  return (
    <div className='flex flex-row justify-start'>
        {children}
        <h2 className={`${theme} text-2xl font-bold font-my-sans ml-1`}>
            {text}
        </h2>
    </div>
  )
}
