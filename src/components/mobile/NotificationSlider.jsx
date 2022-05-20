import React, {useContext} from 'react';
import { ThemeContext } from '../theme-context';

export default function NotificationSlider({show, notify}) {

  const theme = useContext(ThemeContext);
  return (
    <div className={`fixed h-12 bg-dark-cool-blue right-16 ${show && notify ? 'top-[90%]': 'top-full'} rounded-md w-36 transition-[top] duration-500`}>
        <p className={`font-bold text-center text-2xl mt-2 ${theme.pH2} font-my-serif`}>hire me! 👋🏿</p>
    </div>
  )
}