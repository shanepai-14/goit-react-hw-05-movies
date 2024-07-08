import { useState,useEffect } from 'react'
import './App.scss'
import Header from './components/Header'
import { MovieList } from './components/MovieList'
import { getMoviesPopular ,  searchMovies,} from './components/api'
import { useParams } from "react-router-dom";
function App() {
  const [movies, setMovies] = useState([]);
   const [page, setPage] = useState(1)
   const { query } = useParams();
   useEffect(() => {
    const fetchMovies = async () => {
      try {

        let queryResult;
        if (query) {
          queryResult = await searchMovies(query, page);
        } else {
          queryResult = await getMoviesPopular(page);
        }
        setMovies(queryResult.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, [page, query]);
  return (
    <>

     <MovieList movies={movies} />

    </>
  )
}

export default App
