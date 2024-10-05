import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import './App.css';

function App() {
  return (
    <div className="page-wrapper">
      <Header />
      <Navigation />
      <Hero /> 
    </div>
  );
}

export default App;