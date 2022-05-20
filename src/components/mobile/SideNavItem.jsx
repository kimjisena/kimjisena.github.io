import React, {useContext} from 'react';
import { ThemeContext } from '../theme-context';

export default function SideNavItem({item, link}) {
  const theme = useContext(ThemeContext);
  return (
    <>
        <li className={`border-b-2 mb-1 ${theme.sideborder}`}>
            <a href={link}>
                <h2 className={`${theme.headertxt} font-bold font-my-serif text-3xl ${theme.sidehover}`}>{item}</h2>
            </a>
        </li>
    </>
  )
}
