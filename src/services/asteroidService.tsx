import apiService from "./apiService";

export interface AsteroidData {
  id: number,
  name: string,
  is_potentially_hazardous_asteroid: boolean,
  absolute_magnitude_h: number,
  estimated_diameter: {
    kilometers: {
      estimated_diameter_min: number,
      estimated_diameter_max: number
    },
  }

}

interface browseData {
    near_earth_objects: AsteroidData[]
}

export async function getAsteroids(page: number, size: number): Promise<AsteroidData[]> {
    try {
        const response = await apiService.get("/neo/browse",  {
            params: {
                page: page,
                size: size
            }
        });
        const browse: browseData = response.data
        return browse.near_earth_objects;
    } catch (error) {
        console.error("Error al obtener el asteroide:", error);
        return [];
    }
}

export async function getAsteroid(id : number) { // función asincrona
    try {
        const response = await apiService.get(`/neo/${id}`); // respuesta de una función asincrona
        if (response.status === 200) {
            return response.data; // devuelve los datos del asteroide
        } else {
            console.error("Error al obtener el asteroide:", response.statusText);
            return null; // devuelve null si no se encuentra el asteroide
        }
    } catch (error) {
        console.error("Error al obtener el asteroide:", error);
        return null;
    }
}