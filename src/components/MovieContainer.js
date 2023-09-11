import React, { useEffect, useState } from "react";
import "./MovieContainer.css";
import { Gear, Search } from "react-bootstrap-icons";
import MovieTile from "./MovieTile";

const MovieContainer = ({ setData, setToggle }) => {
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
      <div className="searchBar">
        <h1 className="headline">
          <span>Movies</span>{" "}
          <span style={{ fontSize: "50px", paddingBottom: "10px" }}>
            &#128253;
          </span>
        </h1>
        <span class="searchBar2">
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
        </span>
      </div>
      <h1
        style={{
          fontFamily: "fantasy",
          marginTop: "100px",
          textAlign: "center",
        }}
      >
        Search and Book favourite movie
      </h1>
      <div className="Tile-Container">
        {loading && <Gear className="loading" />}
        {error && <h1>Error loading the page...</h1>}
        {moviesData.map((movie) => {
          return (
            <MovieTile
              key={movie.show.id}
              movie={movie.show}
              setData={setData}
              setToggle={setToggle}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MovieContainer;
