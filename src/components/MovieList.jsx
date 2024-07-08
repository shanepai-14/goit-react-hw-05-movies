import React from 'react';
import { MovieCard } from './MovieCard'; // Ensure this path is correct
import PropTypes from 'prop-types';
export function MovieList({ movies }) {
  return (
    <div className="main-container">
      <div className="movie-container">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            poster_path={movie.poster_path}
            title={movie.title}
            genre_ids={movie.genre_ids}
            year={movie.release_date ? [movie.release_date.substring(0, 4)] : ['N/A']}
            vote={movie.vote_average}
          />
        ))}
      </div>
    </div>
  );
}
MovieList.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  };