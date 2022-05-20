import React, { useContext, useState, useEffect } from 'react';
import {BsChatRightText} from 'react-icons/bs';
import { ThemeContext } from '../theme-context';
import NotificationSlider from './NotificationSlider';

export default function Notification({show}) {
  const [notify, setNotify] = useState(false);
  const theme = useContext(ThemeContext);

  useEffect(() => {
      if (!show && notify) {
          setNotify(!notify);
      }
  }, [show, notify]);

  return (
    <>
    <div className={`fixed ${show ? 'right-2': 'right-full'} top-[90%] rounded-full ${theme.iconbg} h-12 w-12`}
         onClick={(e)=> {
          e.stopPropagation();
          setNotify(!notify);}}>
      <BsChatRightText className={`w-8 h-8 ${theme.icon} mx-auto mt-2`}/>
      <p className={`absolute -top-2 text-lg left-[25%] font-bold bg-red-500 w-6 h-6 text-center rounded-full ${notify ? 'invisible': ''} transition-[visibility]`}>1</p>
    </div>
    <NotificationSlider show={show} notify={notify}/>
    </>
  );
}