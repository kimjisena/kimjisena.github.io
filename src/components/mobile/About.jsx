import React, {useContext} from 'react';
import Paragraph from './Paragraph';
import Skills from './Skills';
import TopImage from './TopImage';
import { ThemeContext } from '../theme-context';
import HLevel2 from './HLevel2';
import { VscLink } from 'react-icons/vsc';

const text = `Ipsum est proident et ea non. 
              Officia ut magna in deserunt consequat laborum fugiat sint. 
              Ipsum labore enim irure sunt exercitation do sit qui quis.`

export default function About() {

  const theme = useContext(ThemeContext);

  return (
    <>
    <h1 id='top' className='col-span-full invisible h-4'>top</h1>
    <section className='col-span-full grid grid-cols-3'>
      {/* image and text logo */}
      <TopImage />
      {/*section main content*/}
      <div className='col-span-full mt-2'>
        <h1 id='about' className='invisible h-12'>about me</h1>
        <h1 className={`text-4xl ${theme.H1} font-bold border-b-2 ${theme.h1Border} font-my-sans`}>about me</h1>
        <HLevel2 theme={theme.pH2} text={'who am i'}>
          <VscLink className={`w-8 h-8 ${theme.pH2}`}/>
        </HLevel2>
        <Paragraph theme={theme.pH2}>
          {text}
        </Paragraph>
        <Paragraph theme={theme.pH2}>
          {text}
        </Paragraph>
        <Paragraph theme={theme.pH2}>
          {text}
        </Paragraph>

        <HLevel2 theme={theme.pH2} text={'what do i'}>
          <VscLink className={`w-8 h-8 ${theme.pH2}`}/>
        </HLevel2>
        <Paragraph theme={theme.pH2}>
          {text}
        </Paragraph>
        <Paragraph theme={theme.pH2}>
          {text}
        </Paragraph>
        <Paragraph theme={theme.pH2}>
          {text}
        </Paragraph>
        <Skills />
        <HLevel2 theme={theme.pH2} text={'what love i'}>
          <VscLink className={`w-8 h-8 ${theme.pH2}`}/>
        </HLevel2>
        <Paragraph theme={theme.pH2}>
          {text}
        </Paragraph>
        <Paragraph theme={theme.pH2}>
          {text}
        </Paragraph>
        <Paragraph theme={theme.pH2}>
          {text}
        </Paragraph>
      </div>
    </section>
    </>
  );
}
