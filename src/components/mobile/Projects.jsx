import React, {useContext} from 'react';
import ProjectCard from './ProjectCard';
import { ThemeContext } from '../theme-context';
import Paragraph from './Paragraph';
import javascript from '../../res/images/projects/javascript.svg';

export default function Projects() {
  const theme = useContext(ThemeContext);

  const projects = {
    'reactive-admin': {
      done: false,
      logo: javascript,
      description:  <Paragraph theme={theme.pH2}>
                    A custom django admin site.
                    It's a work in progress, check it <a href={'https://github.com/kimjisena/reactive-admin'} className={`${theme.H1} hover:text-cool-green visited:text-cool-yellow underline`}>here</a>.
                    </Paragraph>
    },
    'compyle': {
      done: true,
      logo: javascript,
      description:  <Paragraph theme={theme.pH2}>
                    A python script that watches and compiles C code.
                    Let's me focus on K &amp; R. It's <a href={'https://github.com/kimjisena/compyle'} className={`${theme.H1} hover:text-cool-green visited:text-cool-yellow underline`}>here</a>.
                    </Paragraph>
    },
    'react-portfolio': {
      done: false,
      logo: javascript,
      description:  <Paragraph theme={theme.pH2}>
                    A single-page app, built using mobile-first design.
                    Check the code for this project <a href={'https://github.com/kimjisena/kimjisena.github.io'} className={`${theme.H1} hover:text-cool-green visited:text-cool-yellow underline`}>here</a>.
                    </Paragraph>
    },
    'game-of-death': {
      done: false,
      logo: javascript,
      description:  <Paragraph theme={theme.pH2}>
                    Conway's game of life, except it's game of death.
                    Not freaked out? Check the code right <a href={'https://github.com/kimjisena/game-of-death'} className={`${theme.H1} hover:text-cool-green visited:text-cool-yellow underline`}>here</a>.
                    </Paragraph>
    }
  }

  return (
    <section className='col-span-full mt-2'>
      <h1 id='projects' className='invisible h-12'>my projects</h1>
      <h1 className={`text-5xl ${theme.H1} font-bold border-b-2 ${theme.h1Border} font-my-serif`}>My projects</h1>
      {/*introductory text*/}
      <p className={`${theme.pH2} text-xl font-my-serif ml-2`}>
        Ever since I came across Marijn Haverbeke's Eloquent JavaScript, my understanding of the web has changed drastically. 
        Then naturally I acquired the React philosophy and workflow... add Tailwind CSS to the mix and I'm glued to my screen for life!
      </p>
      <p className={`${theme.pH2} text-xl mb-3 font-my-serif ml-2`}>
        Here are some interesting projects I'm working on. 
      </p>

      {/*project cards */}
      {Object.keys(projects).map(
        (key) => {
        return (<ProjectCard key={key} done={projects[key].done} name={key} logo={projects[key].logo}>
                  {projects[key].description}
                </ProjectCard>);
        }
      )}
      <p className={`${theme.pH2} text-xl mb-3 font-my-serif ml-2`}>
      You can see more on my GitHub profile right <a href={'https://github.com/kimjisena'} className={`${theme.H1} hover:text-cool-green visited:text-cool-yellow underline`}>here</a>.
      </p>
    </section>
  );
}