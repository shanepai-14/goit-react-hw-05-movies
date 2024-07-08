import React from 'react';
import PropTypes from 'prop-types';
import { getGenreNamesByIds } from '../utils/utils'
import { Link } from "react-router-dom";
export function MovieCard({ id, poster_path, title, genre_ids, year, vote }) {
  const genres = getGenreNamesByIds(genre_ids);
  const releaseYear = Array.isArray(year) ? year[0] : 'N/A';

  return (
   <Link className="movie-card" to={`/movies/${id}`}>
      <img 
        src={poster_path == null ? "https://placehold.co/400x600" : `https://image.tmdb.org/t/p/w500${poster_path}`} 
        alt={title} 
      />
      <p className="movie-title">{title}</p>
      <p className="movie-genre">
        {genres} | {releaseYear}&nbsp;&nbsp;&nbsp;
        <span className="vote">{vote.toFixed(1)}</span>
      </p>
    </Link>
  );
}
MovieCard.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    poster_path: PropTypes.string,
    title: PropTypes.string.isRequired,
    genre_ids: PropTypes.arrayOf(PropTypes.number).isRequired,
    vote: PropTypes.number.isRequired,
  };
  
