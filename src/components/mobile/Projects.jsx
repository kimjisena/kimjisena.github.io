import React, {useContext} from 'react';
import ProjectCard from './ProjectCard';
import { ThemeContext } from '../theme-context';

export default function Projects() {
  const theme = useContext(ThemeContext);

  return (
    <section className='col-span-full mt-2'>
      <h1 id='projects' className='invisible h-12'>my projects</h1>
      <h1 className={`text-4xl ${theme.H1} font-bold border-b-2 ${theme.h1Border} font-my-sans`}>my projects</h1>
      {/*introductory text*/}
      <p className={`${theme.pH2} text-lg mb-3 font-my-sans`}>
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