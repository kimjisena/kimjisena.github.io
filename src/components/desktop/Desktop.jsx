import React from 'react';
import {FaSpinner} from 'react-icons/fa';

export default function Desktop() {
  return (
    <div className='hidden sm:contents'>
      <div className='mx-6'>
        <h1 className={`mt-9 text-7xl text-cool-blue font-my-serif 
                        shadow-xl shadow-cool-black
                        font-bold animate-bounce text-center h-24`}>
          Desktop version coming soon!
        </h1>
        <div className='fixed top-[70%] left-[50%]'>
          <FaSpinner size={`60px`} className={`animate-spin text-dark-cool-blue`}/>
        </div>
      </div>
    </div>
  );
}