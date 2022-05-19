import React, { useContext} from 'react';
import logo1 from '../../res/images/logo1.png';
import { ThemeContext } from '../theme-context';

export default function ProjectCard() {
  const theme = useContext(ThemeContext);
  return (
    <div className={`flex flex-row border-2 ${theme.H1} rounded-lg border-dotted mb-3`}>
        {/*project logo*/}
        <div className={`w-20 h-20 shrink-0 self-center border-r-2 ${theme.H1} border-dotted`}>
            <img src={logo1} alt=''/>
        </div>

        {/*project title and description*/}
        <div className='ml-2'>
            <h2 className={`${theme.pH2} text-2xl font-bold mt-1 font-my-sans`}>shit racer</h2>
            <p className={`${theme.pH2} text-lg font-my-sans`}>
                Ipsum est proident et ea non.
                Officia ut magna in deserunt consequat laborum
                {/*project link*/} <a href={'#about'} className={`${theme.H1} hover:text-cool-green visited:text-cool-yellow underline`}>fugiat sint</a>.
            </p>
        </div>
    </div>
  );
}
