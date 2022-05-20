import React from 'react';
import { VscLink } from 'react-icons/vsc';

export default function HLevel2({theme, text}) {
  return (
    <div className='flex flex-row justify-start'>
        <VscLink className={`w-8 h-8`}/>
        <h2 className={`${theme} text-2xl font-bold font-my-sans ml-1`}>
            {text}
        </h2>
    </div>
  )
}
