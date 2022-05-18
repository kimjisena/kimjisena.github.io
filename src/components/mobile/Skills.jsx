import React from 'react';
import SkillCard from './SkillCard';
// frontend libs & utils
import { FaReact } from 'react-icons/fa';
import { SiRedux } from 'react-icons/si';
import { SiReactrouter } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';
// frontend primitives
import { DiJavascript } from 'react-icons/di';
import { DiHtml5 } from 'react-icons/di';
import { DiCss3 } from 'react-icons/di';
// backend
import { DiPython } from 'react-icons/di';
import { FaNodeJs } from 'react-icons/fa';
import { SiDjango } from 'react-icons/si';
// database
import { SiSqlite } from 'react-icons/si';
import { SiPostgresql } from 'react-icons/si';
// graphics & UI design
import { SiGimp } from 'react-icons/si';
import { SiInkscape } from 'react-icons/si';
import { SiFigma } from 'react-icons/si';
// version control
import { DiGit } from 'react-icons/di';
// text editors & IDEs
import { SiVim } from 'react-icons/si';
import { SiVisualstudiocode } from 'react-icons/si';
// shell
import { SiGnubash } from 'react-icons/si';
// platform
import { SiLinux } from 'react-icons/si';
// honorable mention. I use arch, btw :)
import { SiArchlinux } from 'react-icons/si';

const icons = {
  'React': FaReact, 'Redux': SiRedux, 'React Router': SiReactrouter, 'TailwindCSS': SiTailwindcss,
  'JavaScript': DiJavascript, 'HTML5': DiHtml5, 'CSS3': DiCss3,
  'Python': DiPython, 'NodeJS': FaNodeJs, 'Django': SiDjango,
  'SQLite': SiSqlite, 'PostgreSQL': SiPostgresql,
  'Gimp': SiGimp, 'Inkscape': SiInkscape, 'Figma': SiFigma,
  'Git': DiGit,
  'Vim': SiVim, 'VS Code': SiVisualstudiocode,
  'GNU Bash': SiGnubash,
  'Linux': SiLinux, 'Arch Linux': SiArchlinux
}

export default function Skills() {
  return (
    <div className='grid grid-cols-3 gap-2 grid-rows-7'>
        {Object.keys(icons).map(key => {
          let Icon = icons[key];
          return <SkillCard key={key} icon={<Icon size='40px' className='text-cool-white' />} name={key} />
        })}
    </div>
  )
}
