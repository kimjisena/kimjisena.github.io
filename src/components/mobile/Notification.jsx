import React, { useContext, useState } from 'react';
import {BsChatRightText} from 'react-icons/bs';
import { ThemeContext } from '../theme-context';
import NotificationSlider from './NotificationSlider';

export default function Notification({show}) {
  const [notify, setNotify] = useState(false);
  const theme = useContext(ThemeContext);

  return (
    <div className={`fixed ${show ? 'right-full': 'right-2'} top-[90%] rounded-full ${theme.iconbg} h-12 w-12`}
         onClick={()=> setNotify(!notify)}>
      <BsChatRightText className={`w-8 h-8 ${theme.icon} mx-auto mt-2`}/>
      <p className='absolute -top-2 text-lg left-[25%] font-bold bg-red-500 w-6 h-6 text-center rounded-full'>1</p>
      <NotificationSlider show={notify}/>
    </div>
  );
}