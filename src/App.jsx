import { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import './App.css';
import Navbar from './components/Navbar';
import './index.css';

function App() {

  return (
    <>
     <Sidebar/>
      <Navbar/>
      <HomePage/>
      <Footer/>
    </>
  )
}

export default App
