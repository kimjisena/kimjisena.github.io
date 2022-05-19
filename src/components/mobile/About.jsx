import React from 'react';
import Skills from './Skills';
import TopImage from './TopImage';

export default function About() {
  return (
    <>
    <h1 id='top' className='col-span-full invisible h-4'>top</h1>
    <section className='col-span-full grid grid-cols-3'>
      {/* image and text logo */}
      <TopImage />
      {/*section main content*/}
      <div className='col-span-full mt-2'>
      <h1 id='about' className='invisible h-12'>about me</h1>
        <h1 className='text-4xl text-cool-blue font-bold border-b-2 border-cooler-black font-my-sans'>about me</h1>
        <h2 className='text-cooler-black text-2xl font-bold font-my-sans'>who am i</h2>
          <p className='text-cooler-black text-lg font-my-sans'>
            Ipsum est proident et ea non. Officia ut magna in deserunt consequat laborum fugiat sint. Ipsum labore enim irure sunt exercitation do sit qui quis.
          </p>
          <p className='text-cooler-black text-lg font-my-sans'>
            Ipsum est proident et ea non. Officia ut magna in deserunt consequat laborum fugiat sint. Ipsum labore enim irure sunt exercitation do sit qui quis.
          </p>
          <p className='text-cooler-black text-lg font-my-sans'>
            Ipsum est proident et ea non. Officia ut magna in deserunt consequat laborum fugiat sint. Ipsum labore enim irure sunt exercitation do sit qui quis.
          </p>
        <h2 className='text-cooler-black text-3xl font-bold font-my-sans'>what do i</h2>
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
        <h2 className='text-cooler-black text-3xl font-bold font-my-sans'>what love i</h2>
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
    </>
  );
}
