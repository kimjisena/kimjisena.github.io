import React, { Component, useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Mobile from './components/mobile/Mobile';
import Desktop from './components/desktop/Desktop';
//import Layout from "./components/backup/Layout";

export default function App() {

  const [light, setLight] = useState(true);

  useEffect(() => {
     if (light) document.body.className = 'bg-cool-white';
     else document.body.className = 'bg-dark-cool-background';
  });

  const toggleTheme = () => {
    console.log('theme toggled!');
    setLight(!light);
  }

  return (
       <>
         {/*mobile version of the ui*/}
         <Routes>
           <Route path='/' element={<Mobile toggleTheme={toggleTheme} />} />
         </Routes>

         {/*desktop version of the ui*/}
         <Routes>
           <Route path='/' element={<Desktop />} />
         </Routes>
       </>
  );
}