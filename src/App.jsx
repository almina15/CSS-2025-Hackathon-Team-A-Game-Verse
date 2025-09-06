import { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import './index.css';
import Navbar from './components/Navbar';      
import HomePage from './components/HomePage';  
import Wishlist from './components/Wishlist';
import Registration from './components/Registration';  
import Login from './components/Login';         
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Wishlist" element={<Wishlist />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;

