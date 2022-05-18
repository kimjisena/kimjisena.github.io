import React from 'react';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <section id='projects' className='col-span-full'>
      <h1 className='text-4xl text-cooler-black font-bold border-b-2 border-cooler-blue'>my projects</h1>
      {/*introductory text*/}
      <p className='text-cooler-black text-lg'>
        Ipsum est proident et ea non. Officia ut magna in deserunt consequat laborum fugiat sint. Ipsum labore enim irure sunt exercitation do sit qui quis.
      </p>

      {/*project cards */}
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </section>
  );
}