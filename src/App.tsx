import React from 'react';
import './App.css';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <div>
        <NavBar />
        <div>
          <About />
          <Experience />
          <Projects />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
