// Cast.js
import {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from './api';

const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCast = async () => {
            try {
                const data = await getMovieCredits(movieId);
                setCast(data.cast);
            } catch (error) {
                console.error('Failed to fetch cast:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchCast();
    }, [movieId]);

    if (loading) return <div>Loading cast...</div>;
    return (
        <div className="cast-list">
            <h3>Cast</h3>
            <ul style={{display:'flex',gap:8,flexWrap:'wrap'}}>
                {cast.map((actor) => (
                    <li key={actor.id}>
                        {actor.profile_path && (
                            <img
                                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                                alt={actor.name}
                            />
                        )}
                        <p>{actor.name}</p>
                        <p>as {actor.character}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Cast;

