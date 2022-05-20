import React, { useContext } from 'react';
import {BiUpArrowAlt} from 'react-icons/bi';
import { ThemeContext } from '../theme-context';

export default function BackToTheTop({show}) {
  const theme = useContext(ThemeContext);
  return (
    <a href='#top'>
    <div className={`fixed ${show ? 'right-2': 'right-full'} top-[90%] rounded-full ${theme.iconbg} h-12 w-12`}>
      <BiUpArrowAlt className={`w-8 h-8 ${theme.icon} mx-auto mt-2`}/>
    </div>
    </a>
  );
}