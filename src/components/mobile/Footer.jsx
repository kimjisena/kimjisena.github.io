import React, {useContext} from 'react';
import { ThemeContext } from '../theme-context';

export default function Footer() {
  const theme = useContext(ThemeContext);
  return (
    <div className={`col-span-full ${theme.footer} rounded-t-lg`}>
        <p className={`text-center ${theme.pH2} text-xl font-my-serif mb-4`}>
         With ❤️ by Jisena &copy; 2022
        </p>
    </div>
  )
}
