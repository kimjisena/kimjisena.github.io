import React, {useContext} from 'react';
import { ThemeContext } from '../theme-context';

export default function NotificationSlider({show, notify}) {

  const theme = useContext(ThemeContext);
  return (
    <div className={`fixed h-12 ${theme.iconbg} top-[90%] ${show && notify ? 'right-14': 'right-full'}`}>
        <p className={`font-bold text-center`}>hire me!</p>
    </div>
  )
}
