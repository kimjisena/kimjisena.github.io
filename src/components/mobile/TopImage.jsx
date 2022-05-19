import React from 'react';
import kim from '../../res/images/kim.jpg';

export default function TopImage() {
  return (
    <>
      <div className='col-span-1 col-start-2 mt-2'>
        <div className='rounded-full border-dotted border-4 border-cool-black '>
          <img src={kim} alt='' className='rounded-full' />
        </div>
      </div>
    </>
  )
}
