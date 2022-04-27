import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className='App'>
      <div>
        <SideBar />
        <div>
          <About />
          <Experience />
          <Projects />
        </div>
      </div>
    </div>
  );
}

export default App;
