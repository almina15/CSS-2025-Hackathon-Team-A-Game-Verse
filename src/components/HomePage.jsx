import { useState, useEffect } from "react";

const HomePage = ({ wishlist, toggleWishlist, searchTerm }) => {
  const API_URL = "https://api.rawg.io/api/games";
  const API_KEY = "1e5139d26e0449aeaee838bd6fd1fa75";

  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch(`${API_URL}?key=${API_KEY}`);
        const data = await response.json();
        if (Array.isArray(data.results)) {
          setGames(data.results);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchGames();
  }, []);

  // 🔍 Apply filtering based on Navbar input
  const filteredGames = games.filter((game) =>
    game.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="grid">
      {filteredGames?.map((game) => {
        const isWishlisted = wishlist.some((g) => g.id === game.id);
        return (
          <div key={game.id} className="card">            
  <img src={game.background_image || "/placeholder.svg"} alt={game.name} />            
  <div className="card-content">              
    <h3 className="card-title">{game.name}</h3>              
    <p>Released: {game.released}</p>              
    <button onClick={() => toggleWishlist(game)}>                
      {isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}              
    </button>            
  </div>          
</div>
        );
      })}
    </div>
  );
};

export default HomePage;
