import React, {useContext} from 'react';
import { ThemeContext } from '../theme-context';

export default function SkillCard({icon, name}) {
  const theme = useContext(ThemeContext);
  return (
    <div className={`flex flex-col justify-center items-center ${theme.iconbg} rounded-tr-2xl rounded-bl-2xl`}>
        {icon}
        <h2 className={`${theme.icon}`}>{name}</h2>
    </div>
  );
}