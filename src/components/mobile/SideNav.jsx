import React, {useContext} from 'react';
import SideNavItem from './SideNavItem';
import { ThemeContext } from '../theme-context';

const items = {
  about: '#about',
  projects: '#projects',
  contact: '#contact'
}

export default function SideNav({show, blurred}) {
  const theme = useContext(ThemeContext);

  return (
    <div className={`absolute top-full ${show ? 'left-[25%]': 'left-full'} transition-[left] duration-500
                  ${theme.headerbg} w-3/4 border ${theme.sideborder}
                  rounded-tl-xl rounded-bl-xl h-40`}
         onBlur={() => blurred()}>
      <ul className='flex flex-col mt-5 ml-12'>
        {Object.keys(items).map(key => {
          return <SideNavItem key={key} item={key} link={items[key]} />
        })}       
      </ul>
    </div>
  );
}