import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Header from './common/Header';
import Footer from './common/Footer';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Certifications from './components/certifications';
import AddCertificate from './forms/AddCertifiate';
import AddProject from './forms/AddProject';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/about-me" element={<h1>Pugazhenthi S</h1>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/certifications" element={<Certifications/>}/>
        <Route path="/add-certificate" element={<AddCertificate/>}/>
        <Route path="/add-project" element={<AddProject/>}/>
        <Route path="*" element={<h1>Home</h1>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
