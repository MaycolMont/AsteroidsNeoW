import { useState } from "react";
import type { AsteroidData } from "../services/asteroidService";

interface FilteringProps {
    asteroids: AsteroidData[];
    setAsteroids: (asteroids: AsteroidData[]) => void;    
}

export default function Filtering({ asteroids, setAsteroids }: FilteringProps) {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar asteroide..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
        <button 
          onClick={() => setAsteroids(
            asteroids.filter(asteroid => 
              asteroid.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
          )}>
            Filtrar
        </button>
    </div>
  );
}