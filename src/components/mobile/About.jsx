import React from 'react';
import logo1 from '../../res/images/logo1.png';

export default function About() {
  return (
    <section id='about' className='col-span-full grid grid-cols-3'>
      <div className='col-span-1 col-start-2 bg-orange-900'>
        <div className='rounded-full bg-cool-green mt-1'>
          <img src={logo1} alt='' />
        </div>
        <h1 className='text-center'>{'<jisena />'}</h1>
      </div>
      <div className='col-span-full mt-1'>
        <h1>who am i</h1>
          <p>
            Ipsum est proident et ea non. Officia ut magna in deserunt consequat laborum fugiat sint. Ipsum labore enim irure sunt exercitation do sit qui quis.
          </p>
          <p>
            Ipsum est proident et ea non. Officia ut magna in deserunt consequat laborum fugiat sint. Ipsum labore enim irure sunt exercitation do sit qui quis.
          </p>
          <p>
            Ipsum est proident et ea non. Officia ut magna in deserunt consequat laborum fugiat sint. Ipsum labore enim irure sunt exercitation do sit qui quis.
          </p>
        <h1>what do i</h1>
        <h1>what love i</h1>
      </div>

      {/* <p>
        Ipsum est proident et ea non. Officia ut magna in deserunt consequat laborum fugiat sint. Ipsum labore enim irure sunt exercitation do sit qui quis.
      </p>
      <p>
        Ipsum est proident et ea non. Officia ut magna in deserunt consequat laborum fugiat sint. Ipsum labore enim irure sunt exercitation do sit qui quis.
      </p>
      <p>
        Ipsum est proident et ea non. Officia ut magna in deserunt consequat laborum fugiat sint. Ipsum labore enim irure sunt exercitation do sit qui quis.
      </p> */}
    </section>
  );
}
