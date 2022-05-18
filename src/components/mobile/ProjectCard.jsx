import React from 'react';
import logo1 from '../../res/images/logo1.png';
import { Link } from 'react-router-dom';

export default function ProjectCard() {
  return (
    <div className='w-full my-3'>
        {/*project logo*/}
        <div className='w-32'>
            <img src={logo1} className='float-left' />
        </div>

        {/*project title and description*/}
        <div className=''>
            <h2 className='text-cooler-blue text-2xl font-bold'>shit racer</h2>
            <p className='text-cooler-black text-lg'>
                Ipsum est proident et ea non.
                Officia ut magna in deserunt consequat laborum
                {/*project link*/} <Link to={'#'} className='text-cool-green'>fugiat sint</Link>.
            </p>
        </div>
    </div>
  );
}
