import {useEffect, useState} from 'react';

import './App.css';
import SearchIcon from './search.svg';

import MovieCard from './MovieCard';

const API_URL = 'http://www.omdbapi.com?apikey=12b784d';

// const movie1 = {
//     "Title": "The Amazing Spiderman 2 Webb Cut",
//     "Year": "2021",
//     "imdbID": "tt18351128",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BYzYzZDViNWYtNWViMS00NDMxLThlN2YtZjFkOWMwODkzNzhiXkEyXkFqcGdeQXVyMTUwMzM4NzU0._V1_SX300.jpg"
// }

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("Pokemon");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  return (
    <div className="app">
      <h1>MovieFinder</h1>
      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
      <div className="footer">
          <footer>Copyright@Ankit Chhetri 2022</footer>
      </div>
    </div>
  );
};

export default App;
