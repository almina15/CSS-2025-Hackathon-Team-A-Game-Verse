import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import Register from "./Registration";
import Login from "./Login";

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

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

  return (
    <header className="navbar">
      <div className="logo">🎮 GameHub</div>

      <nav>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#games">Games</a></li>
          <li><a href="#reviews">Reviews</a></li>
          <li><a href="#news">News</a></li>
        </ul>
      </nav>

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
