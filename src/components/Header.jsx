import React,{useEffect,useState} from 'react';
import '../css/header.scss'
import { Link } from 'react-router-dom';
import { useLocation, useParams } from 'react-router-dom';
import { HiMagnifyingGlass } from "react-icons/hi2";
const Header = ({ onSearch }) => {
    const location = useLocation();
    const [inputQuery, setInputQuery] = useState('');
    const isMoviesPage = /^\/movies(\/|$)/.test(location.pathname);
    const { query } = useParams();

  
    useEffect(() => {
        if (location.pathname.startsWith('/search/')) {
          setInputQuery(query || '');
        } else {
          setInputQuery('');
        }
      }, [query, location]);
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (inputQuery.trim()) {
          onSearch(inputQuery.trim());
        }
      };
    
    return (
        <header className="header">
        <div className="header-container">
          <Link to="/" className="nav-logo film" target="">
            {/* <svg className="film-icon-svg">
              <use id="film-icon" href="./images/header-images/film.svg#film"></use>
            </svg> */}
            <span className="title">Filmoteka</span>
          </Link>
          <nav className="nav-bar">
            <ul className="nav-menu">
              <li className="nav nav-menu-list home">
                <Link to="/" className={`nav-list-link home ${isMoviesPage == true ? '': 'active'}`}> HOME </Link>
              </li>
              {/* <li className="nav nav-menu-list library">
                <a href="./library.html" className="nav-list-link library">
                  MY LIBRARY
                </a>
              </li> */}
            </ul>
          </nav>
        </div>
        <form className="search-form-home" id="search-form" onSubmit={handleSubmit}  style={{ display: isMoviesPage ? 'none' : 'block' }}>
          <div className="form-container-home">
            <input
              type="text"
              name="searchQuery"
              id="input-textbox-home"
              autoComplete="off"
              value={inputQuery}
          onChange={(e) => setInputQuery(e.target.value)}
              placeholder="Search Movies"
              autoFocus
            />
            <button type="submit">
            <HiMagnifyingGlass />
           
            </button>
          </div>
          {/* <p className="search_error">
            Search result not successful. Enter the correct movie name
          </p> */}
        </form>
      </header>
      
    )
}

export default Header