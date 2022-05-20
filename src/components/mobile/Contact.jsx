import React, {useContext} from 'react';
import ContactCard from './ContactCard';
import Paragraph from './Paragraph';
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

const p1 = `Well, I think we should keep in touch. 
              I can be reached via GitHub, Twitter, and Email; 
              and it's as simple as clicking one of the buttons below.`

const p2 = `Talk to you soon! ^_^`

export default function Contact() {
  const theme = useContext(ThemeContext);
  return (
    <section className='col-span-full mb-20'>
      <h1 id='contact' className='invisible h-12'>contact me</h1>
      <h1 className={`text-5xl ${theme.H1} font-bold border-b-2 ${theme.h1Border} font-my-serif`}>Contact me</h1>
      <Paragraph theme={theme.pH2}>
        {p1}
      </Paragraph>
      <Paragraph theme={theme.pH2}>
        {p2}
      </Paragraph>
      <div className='grid grid-cols-3 gap-2 justify-items-center mt-3'>
        {Object.keys(icons).map(key => {
          let Icon = icons[key];
          return <ContactCard key={key} icon={<Icon size='32px' className={`${theme.icon}`}/>} name={key}/>
        })}
      </div>
    </section>
  );
}
