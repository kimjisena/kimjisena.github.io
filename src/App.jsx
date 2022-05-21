import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Mobile from './components/mobile/Mobile';
import Desktop from './components/desktop/Desktop';
import {ThemeContext, themes} from './components/theme-context';
//import Layout from "./components/backup/Layout";

export default function App() {

  const [light, setLight] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('theme') === null) {
      localStorage.setItem('theme', 'light');
    } else {
      localStorage.getItem('theme') === 'light' ? setLight(true) : setLight(false);
    }

     if (light) document.body.className = 'bg-cool-white';
     else document.body.className = 'bg-cool-dark';
     document.body.classList.add('transition-colors', 'duration-500');
  }, [light]);

  const toggleTheme = () => {
    light ? localStorage.setItem('theme', 'dark') : localStorage.setItem('theme', 'light');
    setLight(!light);
  }

  return (
       <>
       <ThemeContext.Provider value={light ? themes.light: themes.dark}>
         {/*mobile version of the ui*/}

         <Routes>
           <Route path='/' element={<Mobile toggleTheme={toggleTheme} />} />
         </Routes>

         {/*desktop version of the ui*/}
         <Routes>
           <Route path='/' element={<Desktop />} />
         </Routes>
        </ThemeContext.Provider>
       </>
  );
}