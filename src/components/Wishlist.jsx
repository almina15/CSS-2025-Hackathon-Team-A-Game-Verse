import { useEffect, useState } from "react";

// src/components/Wishlist.jsx
export default function Wishlist({ items }) {
    // ✅ Wishlist state (load from localStorage if available)
  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem("wishlist");
    return saved ? JSON.parse(saved) : [];
  });

  // ✅ Save wishlist whenever it changes
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // ✅ Add/remove game from wishlist
  const toggleWishlist = (game) => {
    if (wishlist.find((g) => g.id === game.id)) {
      setWishlist(wishlist.filter((g) => g.id !== game.id));
    } else {
      setWishlist([...wishlist, game]);
    }
  };
  return (
    <div className="app-container">
      <Sidebar />
      <main>
        <Navbar />

        {/* Pass wishlist + toggle to HomePage */}
        <HomePage wishlist={wishlist} toggleWishlist={toggleWishlist} />

        {/* Wishlist Section */}
        <div className="wishlist">
          <h2>My Wishlist</h2>
          {wishlist.length === 0 ? (
            <p>No games in wishlist yet</p>
          ) : (
            wishlist.map((game) => (
              <div key={game.id} className="wishlist-item">
                {game.title}
              </div>
            ))
          )}
        </div>

        <Footer />
      </main>
    </div>
  );
}
