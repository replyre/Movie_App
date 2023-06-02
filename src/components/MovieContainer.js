import React, { useEffect, useState } from "react";
import "./MovieContainer.css";
import { Gear, Search } from "react-bootstrap-icons";
import MovieTile from "./MovieTile";

const MovieContainer = ({ setData }) => {
  const [moviesData, setMoviesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("all");
  var url = `https://api.tvmaze.com/search/shows?q=${query}`;

  async function getMovies() {
    try {
      var MoviesAPI = await fetch(url);
      var MoviesList = await MoviesAPI.json();
      setMoviesData(MoviesList);
      setLoading(false);
      setError(false);
    } catch (err) {
      setLoading(false);
      setError(true);
    }
  }
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className="Container">
      <h1 className="headline">
        <span>Movies</span> &#128253;
      </h1>
      <div className="searchBar">
        <input
          placeholder="Enter keyword"
          className="search-input"
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <button className="search-button" onClick={() => getMovies()}>
          <Search />
        </button>
      </div>
      <div className="Tile-Container">
        {loading && <Gear className="loading" />}
        {error && <h1>Error loading the page...</h1>}
        {moviesData.map((movie) => {
          return (
            <MovieTile
              key={movie.show.id}
              movie={movie.show}
              setData={setData}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MovieContainer;
