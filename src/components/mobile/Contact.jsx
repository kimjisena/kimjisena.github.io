import React, {useContext} from 'react';
import ContactCard from './ContactCard';
import { ThemeContext } from '../theme-context';
// social
import { DiGithubBadge } from 'react-icons/di';
import {BsTwitter} from 'react-icons/bs';
import {MdEmail} from 'react-icons/md';

const icons = {
  GitHub: DiGithubBadge,
  Twitter: BsTwitter,
  Email: MdEmail
}
export default function Contact() {
  const theme = useContext(ThemeContext);
  return (
    <section className='col-span-full mb-20'>
      <h1 id='contact' className='invisible h-12'>contact me</h1>
      <h1 className={`text-4xl ${theme.H1} font-bold border-b-2 ${theme.h1Border} font-my-sans`}>contact me</h1>
      <p className={`${theme.pH2} text-lg font-my-sans`}>
        Ipsum est proident et ea non. Officia ut magna in deserunt consequat laborum fugiat sint. Ipsum labore enim irure sunt exercitation do sit qui quis.
      </p>
      <p className={`${theme.pH2} text-lg font-my-sans`}>
        Ipsum est proident et ea non. Officia ut magna in deserunt consequat laborum fugiat sint. Ipsum labore enim irure sunt exercitation do sit qui quis.
      </p>
      <p className={`${theme.pH2} text-lg font-my-sans`}>
        Ipsum est proident et ea non. Officia ut magna in deserunt consequat laborum fugiat sint. Ipsum labore enim irure sunt exercitation do sit qui quis.
      </p>
      <div className='grid grid-cols-3 gap-2 justify-items-center mt-3'>
        {Object.keys(icons).map(key => {
          let Icon = icons[key];
          return <ContactCard key={key} icon={<Icon size='32px' className={`${theme.icon}`}/>} name={key}/>
        })}
      </div>
    </section>
  )
}
