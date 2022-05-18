import React from 'react';
//import logo1 from '../../res/images/logo1.png';
import logo2 from '../../res/images/logo2.png';

export default function About() {
  return (
    <section id='about' className='col-span-full grid grid-cols-3'>
      {/* image and text logo */}
      <div className='col-span-1 col-start-2'>
        <div className='rounded-full bg-cool-black mt-1'>
          <img src={logo2} alt='' />
        </div>
        <h1 className='text-center text-cool-black font-bold font-my-sans text-2xl'>{'<jisena />'}</h1>
      </div>

      {/*section main content*/}
      <div className='col-span-full mt-1'>
        <h1 className='text-4xl text-cooler-black font-bold border-b-2 border-cooler-blue'>about me</h1>
        <h2 className='text-cooler-blue text-2xl font-bold'>who am i</h2>
          <p className='text-cooler-black text-lg'>
            Ipsum est proident et ea non. Officia ut magna in deserunt consequat laborum fugiat sint. Ipsum labore enim irure sunt exercitation do sit qui quis.
          </p>
          <p className='text-cooler-black text-lg'>
            Ipsum est proident et ea non. Officia ut magna in deserunt consequat laborum fugiat sint. Ipsum labore enim irure sunt exercitation do sit qui quis.
          </p>
          <p className='text-cooler-black text-lg'>
            Ipsum est proident et ea non. Officia ut magna in deserunt consequat laborum fugiat sint. Ipsum labore enim irure sunt exercitation do sit qui quis.
          </p>
        <h2 className='text-cooler-blue text-3xl font-bold'>what do i</h2>
        <p className='text-cooler-black text-lg'>
            Ipsum est proident et ea non. Officia ut magna in deserunt consequat laborum fugiat sint. Ipsum labore enim irure sunt exercitation do sit qui quis.
          </p>
          <p className='text-cooler-black text-lg'>
            Ipsum est proident et ea non. Officia ut magna in deserunt consequat laborum fugiat sint. Ipsum labore enim irure sunt exercitation do sit qui quis.
          </p>
          <p className='text-cooler-black text-lg'>
            Ipsum est proident et ea non. Officia ut magna in deserunt consequat laborum fugiat sint. Ipsum labore enim irure sunt exercitation do sit qui quis.
          </p>
        <h2 className='text-cooler-blue text-3xl font-bold'>what love i</h2>
        <p className='text-cooler-black text-lg'>
            Ipsum est proident et ea non. Officia ut magna in deserunt consequat laborum fugiat sint. Ipsum labore enim irure sunt exercitation do sit qui quis.
          </p>
          <p className='text-cooler-black text-lg'>
            Ipsum est proident et ea non. Officia ut magna in deserunt consequat laborum fugiat sint. Ipsum labore enim irure sunt exercitation do sit qui quis.
          </p>
          <p className='text-cooler-black text-lg'>
            Ipsum est proident et ea non. Officia ut magna in deserunt consequat laborum fugiat sint. Ipsum labore enim irure sunt exercitation do sit qui quis.
          </p>
      </div>
    </section>
  );
}
