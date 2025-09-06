import { useState, useEffect } from 'react'

const HomePage = () => {
    const API_URL = "https://api.rawg.io/api/games";
    const API_KEY ="1e5139d26e0449aeaee838bd6fd1fa75";
useEffect(() => {
    
    const fetchGames = async () => {
        const response = await fetch(`${API_URL}?key=${API_KEY}`);
        const data = await response.json();
        console.log(data);
    };
    fetchGames();
}, []);
    return ( 
        <div>HomePage</div  >
     );
}
 
export default HomePage;