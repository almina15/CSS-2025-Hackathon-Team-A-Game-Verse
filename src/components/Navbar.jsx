import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import Register from "./Registration";
import Login from "./Login";

const Navbar = ({ onSearch }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleRegister = (username) => {
    setUser(username);
    setIsAuthenticated(true);
    setShowRegister(false);
  };

  const handleLogin = (username) => {
    setUser(username);
    setIsAuthenticated(true);
    setShowLogin(false);
  };

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
    setIsAuthenticated(false);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setIsAuthenticated(true);
        setUser(currentUser.email);
      } else {
        setIsAuthenticated(false);
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    if (onSearch) {
      onSearch(value); // 🔥 send search term up to App.js
    }
  };

  return (
    <header className="navbar">
      <div className="logo">
        <Link to="/">🎮 GameHub</Link>
      </div>

      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/wishlist">Wishlist</Link></li>
        </ul>
      </nav>

      {/* 🔍 Search bar */}
      <input
        type="text"
        placeholder="Search games..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="search-bar"
      />

      <div className="auth">
        {!isAuthenticated ? (
          <>
            <button onClick={() => setShowRegister(true)}>Register</button>
            <button onClick={() => setShowLogin(true)}>Login</button>
          </>
        ) : (
          <>
            <span className="welcome">Welcome, {user}</span>
            <button onClick={handleLogout}>Logout</button>
          </>
        )}
      </div>

      {showRegister && (
        <Register onRegister={handleRegister} onClose={() => setShowRegister(false)} />
      )}
      {showLogin && (
        <Login onLogin={handleLogin} onClose={() => setShowLogin(false)} />
      )}
    </header>
  );
};

export default Navbar;
