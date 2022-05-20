import React, {useContext} from 'react';
import ProjectCard from './ProjectCard';
import { ThemeContext } from '../theme-context';
import Paragraph from './Paragraph';
import javascript from '../../res/images/projects/javascript.svg';

export default function Projects() {
  const theme = useContext(ThemeContext);

  const projects = {
    'shit racer': {
      done: false,
      logo: javascript,
      description:  <Paragraph theme={theme.pH2}>
                    Ipsum est proident et ea non.
                    Officia ut magna in deserunt consequat 
                    laborum <a href={'https://github.com/kimjisena'} className={`${theme.H1} hover:text-cool-green visited:text-cool-yellow underline`}>fugiat sint</a>.
                    </Paragraph>
    },
    'compyle': {
      done: true,
      logo: javascript,
      description:  <Paragraph theme={theme.pH2}>
                    Ipsum est proident et ea non.
                    Officia ut magna in deserunt consequat 
                    laborum <a href={'https://github.com/kimjisena'} className={`${theme.H1} hover:text-cool-green visited:text-cool-yellow underline`}>fugiat sint</a>.
                    </Paragraph>
    },
    'blog/portifolio': {
      done: false,
      logo: javascript,
      description:  <Paragraph theme={theme.pH2}>
                    Ipsum est proident et ea non.
                    Officia ut magna in deserunt consequat 
                    laborum <a href={'https://github.com/kimjisena'} className={`${theme.H1} hover:text-cool-green visited:text-cool-yellow underline`}>fugiat sint</a>.
                    </Paragraph>
    },
    'conway': {
      done: false,
      logo: javascript,
      description:  <Paragraph theme={theme.pH2}>
                    Ipsum est proident et ea non.
                    Officia ut magna in deserunt consequat 
                    laborum <a href={'https://github.com/kimjisena'} className={`${theme.H1} hover:text-cool-green visited:text-cool-yellow underline`}>fugiat sint</a>.
                    </Paragraph>
    }
  }

  return (
    <section className='col-span-full mt-2'>
      <h1 id='projects' className='invisible h-12'>my projects</h1>
      <h1 className={`text-5xl ${theme.H1} font-bold border-b-2 ${theme.h1Border} font-my-serif`}>My projects</h1>
      {/*introductory text*/}
      <p className={`${theme.pH2} text-xl mb-3 font-my-serif ml-2`}>
        Ipsum est proident et ea non. Officia ut magna in deserunt consequat laborum fugiat sint. Ipsum labore enim irure sunt exercitation do sit qui quis.
      </p>

      {/*project cards */}
      {Object.keys(projects).map(
        (key) => {
        return (<ProjectCard key={key} done={projects[key].done} name={key} logo={projects[key].logo}>
                  {projects[key].description}
                </ProjectCard>);
        }
      )}
    </section>
  );
}