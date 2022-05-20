import React from 'react';
import { useState, useContext } from 'react';
import ToggleTheme from './ToggleTheme';
import SideNav from './SideNav';
import {VscMenu} from 'react-icons/vsc';
import { VscChromeClose } from 'react-icons/vsc';
import { ThemeContext } from '../theme-context';

export default function TopNav({toggleTheme}) {
  const [sideNav, setSideNav] = useState(false);

  const theme = useContext(ThemeContext);
  
  const handleBlur = () => {
    setSideNav(!sideNav);
  }
  return (
    <header className={`fixed top-0 w-full h-14 ${theme.headerbg}`}>
      <div className='grid grid-cols-3 h-full'>
        <ToggleTheme toggleTheme={toggleTheme} />
        <h1 className={`text-center ${theme.headertxt} font-bold font-my-cursive text-4xl align-middle mt-3 col-span-1`}>{'jisena'}</h1>
        <div className='col-span-1 flex flex-row-reverse pr-4'>
          <div className='mt-3' onClick={() => setSideNav(!sideNav)}>
            {sideNav ? <VscChromeClose className={`${theme.icon}`} size='32px'/>
                     : <VscMenu className={`${theme.icon}`} size='32px'/>}
          </div>
        </div>
      </div>
      <SideNav show={sideNav} blurred={handleBlur}/>
    </header>
  );
}