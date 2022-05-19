import React from 'react';
import Skills from './Skills';
//import logo1 from '../../res/images/logo1.png';
//import logo2 from '../../res/images/logo2.png';
import kim from '../../res/images/kim.jpg';

export default function About() {
  return (
    <section className='col-span-full grid grid-cols-3'>
      {/* image and text logo */}
      <div className='col-span-1 col-start-2 mt-2'>
        <div className='rounded-full border-dotted border-4 border-cool-black '>
          <img src={kim} alt='' className='rounded-full' />
        </div>
      </div>

      {/*section main content*/}
      <div className='col-span-full mt-2'>
      <h1 id='about' className='invisible h-12'>about me</h1>
        <h1 className='text-4xl text-cooler-black font-bold border-b-2 border-cooler-blue font-my-sans'>about me</h1>
        <h2 className='text-cooler-blue text-2xl font-bold font-my-sans'>who am i</h2>
          <p className='text-cooler-black text-lg font-my-sans'>
            Ipsum est proident et ea non. Officia ut magna in deserunt consequat laborum fugiat sint. Ipsum labore enim irure sunt exercitation do sit qui quis.
          </p>
          <p className='text-cooler-black text-lg font-my-sans'>
            Ipsum est proident et ea non. Officia ut magna in deserunt consequat laborum fugiat sint. Ipsum labore enim irure sunt exercitation do sit qui quis.
          </p>
          <p className='text-cooler-black text-lg font-my-sans'>
            Ipsum est proident et ea non. Officia ut magna in deserunt consequat laborum fugiat sint. Ipsum labore enim irure sunt exercitation do sit qui quis.
          </p>
        <h2 className='text-cooler-blue text-3xl font-bold font-my-sans'>what do i</h2>
        <p className='text-cooler-black text-lg font-my-sans'>
            Ipsum est proident et ea non. Officia ut magna in deserunt consequat laborum fugiat sint. Ipsum labore enim irure sunt exercitation do sit qui quis.
          </p>
          <p className='text-cooler-black text-lg font-my-sans'>
            Ipsum est proident et ea non. Officia ut magna in deserunt consequat laborum fugiat sint. Ipsum labore enim irure sunt exercitation do sit qui quis.
          </p>
          <p className='text-cooler-black text-lg font-my-sans'>
            Ipsum est proident et ea non. Officia ut magna in deserunt consequat laborum fugiat sint. Ipsum labore enim irure sunt exercitation do sit qui quis.
          </p>
          <Skills />
        <h2 className='text-cooler-blue text-3xl font-bold font-my-sans'>what love i</h2>
        <p className='text-cooler-black text-lg font-my-sans'>
            Ipsum est proident et ea non. Officia ut magna in deserunt consequat laborum fugiat sint. Ipsum labore enim irure sunt exercitation do sit qui quis.
          </p>
          <p className='text-cooler-black text-lg font-my-sans'>
            Ipsum est proident et ea non. Officia ut magna in deserunt consequat laborum fugiat sint. Ipsum labore enim irure sunt exercitation do sit qui quis.
          </p>
          <p className='text-cooler-black text-lg font-my-sans'>
            Ipsum est proident et ea non. Officia ut magna in deserunt consequat laborum fugiat sint. Ipsum labore enim irure sunt exercitation do sit qui quis.
          </p>
      </div>
    </section>
  );
}
