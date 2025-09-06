import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

import HomePage from './components/HomePage';
import Wishlist from './components/Wishlist';
import Registration from './components/Registration';
import Login from './components/Login';

import './index.css';

const App = () => {
  const [wishlist, setWishlist] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); 

  useEffect(() => {
    const storedWishlist = localStorage.getItem('wishlist');
    if (storedWishlist) {
      setWishlist(JSON.parse(storedWishlist));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const toggleWishlist = (game) => {
    const isWishlisted = wishlist.some((g) => g.id === game.id);
    if (isWishlisted) {
      setWishlist(wishlist.filter((g) => g.id !== game.id));
    } else {
      setWishlist([...wishlist, game]);
    }
  };

  return (
    <Router>
      <Navbar onSearch={setSearchTerm} /> {/* pass callback */}
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              wishlist={wishlist}
              toggleWishlist={toggleWishlist}
              searchTerm={searchTerm} // pass query
            />
          }
        />
        <Route
          path="/wishlist"
          element={<Wishlist wishlist={wishlist} toggleWishlist={toggleWishlist} />}
        />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
