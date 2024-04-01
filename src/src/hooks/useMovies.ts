import axios from 'axios';
import { useEffect, useState } from 'react'

export interface Movie {
    id: string;
    title: string;
    original_title: string;
    original_title_romanised: string;
    image: string;
    movie_banner: string;
    description: string;
    director: string;
    producer: string;
    release_date: string;
    running_time: string;
    rt_score: string;
    people: string[];
    species: string[];
    locations: string[];
    vehicles: string[];
    url: string;
  }

const useMovies = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [error, setError] = useState<string>("");
    const [isLoading, setLoading] = useState(false)
  
    useEffect(() => {
      const fetchMovies = async () => {
        try {
          setLoading(true);
          const response = await axios.get("https://ghibliapi.vercel.app/films");
          setMovies(response.data);
          console.log(response.data);
          setLoading(false);
        } catch (err: any) {
          setError(err);
          setLoading(false);
        }
      };
  
      fetchMovies();
      isLoading;
    }, []);

    return { movies, error, isLoading };
}

export default useMovies;
