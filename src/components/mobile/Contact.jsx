import React from 'react';
import ContactCard from './ContactCard';
// social
import { DiGithubBadge } from 'react-icons/di';
import {BsTwitter} from 'react-icons/bs';
import {MdEmail} from 'react-icons/md';

const icons = {
  'GitHub': DiGithubBadge,
  'Twitter': BsTwitter,
  'Email': MdEmail
}
export default function Contact() {
  return (
    <section className='col-span-full mt-4 mb-20'>
      <h1 id='contact' className='text-4xl text-cooler-black font-bold border-b-2 border-cooler-blue font-my-sans'>contact me</h1>
      <p className='text-cooler-black text-lg font-my-sans'>
        Ipsum est proident et ea non. Officia ut magna in deserunt consequat laborum fugiat sint. Ipsum labore enim irure sunt exercitation do sit qui quis.
      </p>
      <p className='text-cooler-black text-lg font-my-sans'>
        Ipsum est proident et ea non. Officia ut magna in deserunt consequat laborum fugiat sint. Ipsum labore enim irure sunt exercitation do sit qui quis.
      </p>
      <p className='text-cooler-black text-lg font-my-sans'>
        Ipsum est proident et ea non. Officia ut magna in deserunt consequat laborum fugiat sint. Ipsum labore enim irure sunt exercitation do sit qui quis.
      </p>
      <div className='grid grid-cols-3 gap-2 justify-items-center mt-3'>
        {Object.keys(icons).map(key => {
          let Icon = icons[key];
          return <ContactCard icon={<Icon key={key} size='32px' className='text-cool-white'/>} name={key}/>
        })}
      </div>
    </section>
  )
}
