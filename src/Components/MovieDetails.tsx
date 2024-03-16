import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface Movie {
  id: string;
  title: string;
  description: string;
}

const MovieDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [movieDetails, setMovieDetails] = useState<Movie | null>(null);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await fetch(`https://ghibliapi.vercel.app/films/${id}`);
                const data = await response.json();
                setMovieDetails(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchMovieDetails();
    }, [id]);

    return (
        <div>
            <div >{movieDetails?.title}</div>
        </div>
    );
};

export default MovieDetails;