import React from "react";
import "./MovieTile.css";
import { Star, StarFill, StarHalf } from "react-bootstrap-icons";

const MovieTile = ({ movie, setData }) => {
  let star = movie.rating.average;
  return (
    <div className="Tile">
      <img src={movie.image ? movie.image.medium : movie.title} />
      <h3>{movie.name}</h3>
      <p className="rating">
        Rating:
        {star !== "null" ? (
          star > "5" ? (
            star > "8" ? (
              <StarFill style={{ fontSize: "12px" }} />
            ) : (
              <StarHalf style={{ fontSize: "12px" }} />
            )
          ) : (
            <Star style={{ fontSize: "12px" }} />
          )
        ) : (
          " --"
        )}
        {star !== "null" ? star : ""}
        {}
      </p>
      <div className="genres">
        {movie.genres.map((item, id) => {
          return <span key={id}>{item} </span>;
        })}
      </div>
      <button
        className="showButton"
        onClick={() => {
          setData(JSON.stringify(movie));
        }}
      >
        Show
      </button>
    </div>
  );
};

export default MovieTile;
