import { useState } from 'react'
import './App.css'
import React from 'react';
import Head from './components/head';
import Navbar from './components/navBar';
import Home from './components/home';
// import Cortes from './components/cortes';
// import Historia from './components/historia';
// import Contacto from './components/contacto';
import Footer from './components/footer';

function App() {
  return (
      <div className="App">
          <Head />
          <Navbar />
          <Home />
          {/* <Cortes />
          <Historia />
          <Contacto /> */}
          <Footer />
      </div>
  );
}

export default App
