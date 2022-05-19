import React from 'react';
import logo1 from '../../res/images/logo1.png';

export default function ProjectCard() {
  return (
    <div className='flex flex-row border-2 border-cool-blue rounded-lg border-dotted mb-3'>
        {/*project logo*/}
        <div className='w-20 h-20 shrink-0 self-center border-r-2 border-cool-blue border-dotted'>
            <img src={logo1} alt=''/>
        </div>

        {/*project title and description*/}
        <div className='ml-2'>
            <h2 className='text-cooler-black text-2xl font-bold mt-1 font-my-sans'>shit racer</h2>
            <p className='text-cooler-black text-lg font-my-sans'>
                Ipsum est proident et ea non.
                Officia ut magna in deserunt consequat laborum
                {/*project link*/} <a href={'#about'} className='text-cool-blue hover:text-cool-green visited:text-cool-yellow underline'>fugiat sint</a>.
            </p>
        </div>
    </div>
  );
}
