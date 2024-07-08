import React, { useEffect , useState} from 'react';
import { useParams,Link, Outlet } from "react-router-dom";
import { getMovieDetails } from "../components/api"
import '../css/movie.scss'


const MovieDetails = () => {
    const { movieId } = useParams();
    const [movieDetails, setMovieDetails] = useState(null);



    useEffect(() => {
        const fetchMovieDetails = async () => {
          const movieDetails = await getMovieDetails(movieId);
          console.log(movieDetails);
          setMovieDetails(movieDetails);
        };
    
        fetchMovieDetails();
      }, [movieId]);

    const getMovieGenresNames = genres =>
        genres
          .splice(0, Math.min(2, genres.length))
          .map(genre => genre.name)
          .join(', ');

    return (
        <div>
        { movieDetails ? (
            <div className="modal-movie">

          <img
            className="image"
            src={movieDetails.poster_path == null
              ? `https://placehold.co/400x600`
              : `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
            }
            alt={movieDetails.title}
  
          />
    
        <div className="content">
          <h2 className="movie-title">{movieDetails.title}</h2>
  
          <div className="left-right-container">
            <div className="movie-details-modal">
              <ul className="property">
                <li>
                  <div className="left-side">Vote/Votes </div>
                  <span className="right-side">
                    <span className="vote">{movieDetails.vote_average.toFixed(1)}</span> <i>/</i>
                    <span className="votes">{movieDetails.vote_count}</span>
                  </span>
                </li>
                <li>
                  <div className="left-side ">Popularity </div>
                  <span className="right-side">
                    {movieDetails.popularity.toFixed(2)}
                  </span>
                </li>
                <li>
                  <div className="left-side ">Original Title </div>
                  <span className="right-side">{movieDetails.original_title}</span>
                </li>
                <li>
                  <div className="left-side ">Genre </div>
                  <span className="right-side">
                    {getMovieGenresNames(movieDetails.genres)}
                  </span>
                </li>
              </ul>
            </div>
  
            <div className="about">
              <p className="about-title">About</p>
              <div className="overview-container">
                <p className="movie-overview">{movieDetails.overview}</p>
              </div>
              <nav>
                    <ul style={{display:'flex',gap:"20px",color:'black'}}>
                        <li><Link style={{color:'black'}}to={`cast`}>Cast</Link></li>
                        <li><Link style={{color:'black'}}  to={`reviews`}>Reviews</Link></li>
                    </ul>
                </nav>
                
                <Outlet />
            </div>
          
          </div>
        </div>
      </div>
        ): (
            <div>Loading...</div>
          ) }
        </div>
    )
}

export default MovieDetails