import React, {useContext} from 'react';
import Paragraph from './Paragraph';
import Skills from './Skills';
import TopImage from './TopImage';
import { ThemeContext } from '../theme-context';
import HLevel2 from './HLevel2';
import {HiOutlineLink} from 'react-icons/hi';

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
        <h1 id='about' className='invisible h-12'>About me</h1>
        <h1 className={`text-5xl ${theme.H1} font-bold border-b-2 ${theme.h1Border} font-my-serif`}>About me</h1>
        <HLevel2 theme={theme.pH2} text={'who am i'}>
          <HiOutlineLink className={`w-8 h-8 ${theme.pH2}`}/>
        </HLevel2>
        <Paragraph theme={theme.pH2}>
          {`Hello, and welcome to my portfolio!`}
        </Paragraph>
        <Paragraph theme={theme.pH2}>
          {`I'm Ponsiano Jisena, a developer from Tanzania. 
            I've spent the best part of my life conjuring ghouls and daemons hidden deep in my computer.`}
        </Paragraph>
        <Paragraph theme={theme.pH2}>
          {`It's been both an exciting journey and a humbling experience. 
          I have witnessed processes give birth to other processes only to end up killing them both. 
          I have read hundreds of manual pages only to be referred to other huge and almost cryptic manuals.`}
        </Paragraph>
        <Paragraph theme={theme.pH2}>
          {`It's an infinite loop that I enjoy living, and I intend to keep it that way for as 
          long as my heart keeps its beat.`}
        </Paragraph>

        <HLevel2 theme={theme.pH2} text={'what do i'}>
          <HiOutlineLink className={`w-8 h-8 ${theme.pH2}`}/>
        </HLevel2>
        <Paragraph theme={theme.pH2}>
          {`I spend most of my active time writing computer code, reading computer code, 
          reading books on computer code and wrestling with my Linux box (probably I should get a life).`}
        </Paragraph>
        <Paragraph theme={theme.pH2}>
          {`I'm currently investing more time in frontend development partly because it's 
          very accessible and feedback is immediate. To truly appreciate a C 'Hello World' program, 
          one has to know just how involved the standard I/O stream is.`}
        </Paragraph>
        <Paragraph theme={theme.pH2}>
          {`On the other hand, things happen very fast when one's declaring UI using 
          React's JSX syntax...'Hello React' just hits different.`}
        </Paragraph>
        <Paragraph theme={theme.pH2}>
          {`Here are some tools that commonly cross my hands on (almost) a day to day basis.`}
        </Paragraph>
        <Skills />
        <Paragraph theme={theme.pH2}>
          {`Wait, Linux and Arch Linux? Redundancy you say? 
          There was no way Arch couln't have made the list...cool toy that one.`}
        </Paragraph>
        <HLevel2 theme={theme.pH2} text={'what love i'}>
          <HiOutlineLink className={`w-8 h-8 ${theme.pH2}`}/>
        </HLevel2>
        <Paragraph theme={theme.pH2}>
          {`I like everything tech. 
          I know this because I never get enough of it and no matter how many interests I develop, 
          tech always comes first.`}
        </Paragraph>
        <Paragraph theme={theme.pH2}>
          {`I enjoy reading books (fiction and technical books). 
          Language is another phenomenon that never ceases to amaze me. 
          I'm currently acquiring Spanish, alongside a bunch of other programming languages.`}
        </Paragraph>
        <Paragraph theme={theme.pH2}>
          {`Not to sound philosophical or something but, 
          language shapes thoughts and thoughts shape one's subjective reality, 
          and I'd like my own reality to be shaped by as many languages (both human and machine languages) as I can acquire.`}
        </Paragraph>
        <Paragraph theme={theme.pH2}>
          {`I enjoy both ancient and contemporary history. 
          Humanity has come a long way and history tells the best of humanity's stories.`}
        </Paragraph>
        <Paragraph theme={theme.pH2}>
          {`This whole thing is turning into a blog, isn't it?`}
        </Paragraph>
      </div>
    </section>
    </>
  );
}
