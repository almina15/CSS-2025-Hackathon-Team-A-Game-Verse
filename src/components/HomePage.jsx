import { useState, useEffect } from "react";
import GameCard from "../components/GameCard"; // import reusable card

const HomePage = () => {
  const API_URL = "https://api.rawg.io/api/games";
  const API_KEY = "1e5139d26e0449aeaee838bd6fd1fa75";

  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch(`${API_URL}?key=${API_KEY}`);
        const data = await response.json();
        console.log(data);

        if (Array.isArray(data.results)) {
          setGames(data.results);
        } else {
          console.error(
            "Expected 'results' array not found in the API response"
          );
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchGames();
  }, []);

  return (
    <div className="grid">
      {games.map((game) => (
        <GameCard
          key={game.id}
          name={game.name}
          image={game.background_image}
          released={game.released}
        />
      ))}
    </div>
  );
};

export default HomePage;
