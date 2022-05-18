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
// social
import { DiGithubBadge } from 'react-icons/di';
import {BsTwitter} from 'react-icons/bs';
// honorable mention. I use arch, btw :)
import { SiArchlinux } from 'react-icons/si';

const icons = [
    FaReact, SiRedux, SiReactrouter, SiTailwindcss,
    DiJavascript, DiHtml5, DiCss3,
    DiPython, FaNodeJs, SiDjango,
    SiSqlite, SiPostgresql,
    SiGimp, SiInkscape, SiFigma,
    DiGit,
    SiVim, SiVisualstudiocode,
    SiGnubash,
    SiLinux, SiArchlinux
]
const names = [
    'React', 'Redux', 'React Router', 'TailwindCSS',
    'JavaScript', 'HTML5', 'CSS3',
    'Python', 'NodeJS', 'Django',
    'SQLite', 'PostgreSQL', 
    'Gimp', 'Inkscape', 'Figma',
    'Git',
    'Vim', 'VS Code',
    'GNU Bash', 'Linux', 'Arch'
]
export default function Skills() {
  return (
    <div className='grid grid-cols-3 gap-2 grid-rows-7'>
        {icons.map((E, index) => {
            return <SkillCard key={index} icon={<E size='40px' className='text-cool-white' />} name={names[index]} />
        })}
    </div>
  )
}
