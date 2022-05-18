import React from 'react';
import {BiUpArrowAlt} from 'react-icons/bi';

export default function BackToTheTop() {
  return (
    <div className='fixed right-2 top-[90%] rounded-full bg-cool-blue border-[1px] h-12 w-12'>
      <BiUpArrowAlt className='w-8 h-8 text-cool-white mx-auto mt-2'/>
    </div>
  );
}
