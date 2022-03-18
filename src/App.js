import React from 'react';
import {Routes, Route} from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './components/Home';
import Blogs from './components/Blogs';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  return (
    <div className="flex flex-col h-screen justify-between">
      <NavBar />

      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />
    </div>
    
  );
}

export default App;
