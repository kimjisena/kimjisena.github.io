import React, {useContext} from 'react';
import { ThemeContext } from '../theme-context';

export default function ContactCard({icon, name}) {
  const theme = useContext(ThemeContext);
  return (

    <div className={`flex flex-col justify-center items-center ${theme.iconbg} rounded-2xl w-20`}>
        {icon}
    <h2 className={`${theme.icon}`}>{name}</h2>
</div>
  );
}
