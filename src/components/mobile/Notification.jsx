import React, { useContext } from 'react';
import {BsChatRightText} from 'react-icons/bs';
import { ThemeContext } from '../theme-context';

export default function Notification({show}) {
  const theme = useContext(ThemeContext);
  return (
    <div className={`fixed ${show ? 'right-full': 'right-2'} top-[90%] rounded-full ${theme.iconbg} h-12 w-12`}>
      <BsChatRightText className={`w-8 h-8 ${theme.icon} mx-auto mt-2`}/>
    </div>
  );
}