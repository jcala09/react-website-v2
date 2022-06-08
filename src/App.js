import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import Socials from './components/pages/Socials';
import Projects from './components/pages/Projects';

import './App.css';
import {BrowserRouter as 
  Router, 
  Routes, 
  Route} from 'react-router-dom'
function App() {
  return (
    <>
    <Router>
      <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Projects" element={<Projects/>}/>
    <Route path="/social-media" element={<Socials/>}/>
    </Routes>
      <Footer/>
      </Router>
      
      </>
    
  );
}

export default App;
