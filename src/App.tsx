import './App.css'

import { useEffect, useState } from 'react';
import { getAsteroids, type AsteroidData } from './services/asteroidService';
import Pagination from './components/Pagination';
import Filtering from './components/Filtering';

export default function App() {
  const [asteroids, setAsteroids] = useState<AsteroidData[]>([]);
  const [asteroidSelected, setAsteroidSelected] = useState<AsteroidData | null>(null);
  const [size, setSize] = useState<number>(20);
  const [page, setPage] = useState<number>(0);

  useEffect(()=> {
    const axiosAsteroids = async () =>  {
      const data = await getAsteroids(page, size);
      setAsteroids(data);
    };
    axiosAsteroids();
  }, [page]);// pedir nuevamente los datos si se cambia de página

  const handleAsteroidClick = (asteroid: AsteroidData) => {
    setAsteroidSelected(asteroid);
  };

  return (
    <>
      <div className='flex flex-col items-center justify-center p-flex flex-row items-center justify-center gap-4 p-4'>
        <Filtering asteroids={asteroids} setAsteroids={setAsteroids}/>
        <Pagination page={page} setPage={setPage}/>
        <button
          onClick={() => {
            setPage(page);
            setAsteroidSelected(null);
          }}>
          Limpiar Filtros</button>
      </div>
      
      <div>
        {asteroids && 
          asteroids.map((asteroid) => (
            <button 
              key={asteroid.id}
              onClick={() => handleAsteroidClick(asteroid)}>
                {asteroid.name}
            </button>
          ))
        }
      </div>

      {asteroidSelected && (
        <div className=''>
          <h2>Detalles del asteroide</h2>
          <p>ID: {asteroidSelected.id}</p>
          <p>Nombre: {asteroidSelected.name}</p>
          <p>
            {asteroidSelected.is_potentially_hazardous_asteroid 
              ? "Peligroso" 
              : "No peligroso"}
          </p>
          <p>Magnitud absoluta: {asteroidSelected.absolute_magnitude_h}</p>
          <p>Diámetro estimado: 
            {asteroidSelected.estimated_diameter.kilometers.estimated_diameter_min}- 
            {asteroidSelected.estimated_diameter.kilometers.estimated_diameter_max} km
          </p>
          <button
            onClick={() => setAsteroidSelected(null)}>
            Ocultar
          </button>
        </div>
      )}
    </>
  );
}
