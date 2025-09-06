import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';      
import HomePage from './components/HomePage';  
import Wishlist from './components/Wishlist';
import Registration from './components/Registration';  
import Login from './components/Login';         

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

