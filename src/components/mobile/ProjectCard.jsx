import React, { useContext} from 'react';
//import logo1 from '../../res/images/logo1.png';
import { ThemeContext } from '../theme-context';
import HLevel2 from './HLevel2';
//import { MdIncompleteCircle } from 'react-icons/md';
import { MdDoneAll, MdRemoveDone } from 'react-icons/md';

export default function ProjectCard({done, name, logo, children}) {
  const theme = useContext(ThemeContext);
  return (
    <div className={`flex flex-row border-2 ${theme.h1Border} rounded-lg border-dotted mb-3`}>
        {/*project logo*/}
        <div className={`w-20 h-20 shrink-0 self-center border-r-2 ${theme.h1Border} border-dotted`}>
            {<img src={logo} alt=''/>}
        </div>

        {/*project title and description*/}
        <div className='ml-2'>
            <HLevel2 theme={theme.pH2} text={name}>
              {done ? <MdDoneAll className={`w-8 h-8 ${theme.pH2}`}/>: <MdRemoveDone className={`w-8 h-8 ${theme.pH2}`}/>}
            </HLevel2>
            {children}
        </div>
    </div>
  );
}
