import React, {useContext} from 'react';
import { ThemeContext } from '../theme-context';

export default function NotificationSlider({show, notify}) {

  const theme = useContext(ThemeContext);
  return (
    <div className={`fixed h-12 bg-dark-cool-blue top-[90%] ${show && notify ? 'right-16': 'right-full'} rounded-md w-36 transition-[right] duration-500`}>
        <p className={`font-bold text-center text-xl mt-2 ${theme.pH2}`}>hire me! 👋🏿</p>
    </div>
  )
}