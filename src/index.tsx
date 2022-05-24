import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Intro from './Components/Intro/Intro';
import Experience from './Components/Experience/Experience';
import Education from './Components/Education/Education';
import Projects from './Components/Projects/Projects';
import Hobbies from './Components/Hobbies/Hobbies';
import Contact from './Components/Contact/Contact';
import AboutMe from './Components/AboutMe/AboutMe';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Intro />
    <AboutMe/>
    <Education />
    <Experience />
    <Projects/>
    <Hobbies/>
    <Contact/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
