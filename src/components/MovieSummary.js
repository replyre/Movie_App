import React from "react";
import "./MovieSummary.css";
import { Book, TicketPerforated } from "react-bootstrap-icons";
import Booking from "./Booking";
import { backdropClasses } from "@mui/material";

const MovieSummary = ({ data }) => {
  const [checkBooking, setCheckBooking] = React.useState(false);
  let Userdata = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : "";
  const handleBooking = () => {
    setCheckBooking(true);
  };
  let movieData = data.length > 0 ? JSON.parse(data) : "";
  return data.length > 0 ? (
    <div className="Summary">
      <h1 className="Title">{movieData.name}</h1>
      <div className="Rating">
        <p>
          <b>Language:</b> {movieData.language}
        </p>
        <p>
          <b>Rating:</b>{" "}
          {movieData.rating.average ? movieData.rating.average + "/10" : "--"}
        </p>
      </div>
      <div className="summary-container">
        <img src={movieData.image ? movieData.image.medium : movieData.title} />
        <div>
          <h2 style={{ paddingBottom: "5px" }}>Summary:</h2>
          <div
            className="material"
            dangerouslySetInnerHTML={{ __html: movieData.summary }}
          ></div>
        </div>
      </div>
      <p
        style={{
          display: "flex",
          justifyContent: "space-around",
          gap: "5px",
          width: "100%",
          marginBottom: "10px",
        }}
      >
        <span>
          <b>Premiered:</b> {movieData.premiered}
        </span>
        <span>
          <b>Status:</b> {movieData.status}
        </span>
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "5px",
          fontSize: "20px",
        }}
      >
        <span className="hid">Genre:</span>
        <div className="genres">
          {movieData.genres.map((item, id) => {
            return <span key={id}>{item} </span>;
          })}
        </div>
      </div>
      <div className="summaryButtons">
        <a href={movieData.url} style={{ textDecoration: "none" }}>
          <button className="readMore">
            Read More <Book />
          </button>
        </a>

        <button className="bookTickets" onClick={handleBooking}>
          Book Tickets
          <TicketPerforated />
        </button>
      </div>
      {checkBooking && (
        <Booking setCheckBooking={setCheckBooking} movieData={movieData} />
      )}

      {Userdata[0].name ? (
        Userdata[0].movieid == movieData.id ? (
          <>
            <h2>
              Mr. {Userdata[0].name.toUpperCase()} you have already booked{" "}
              {Userdata[0].amt / 250} tickets.
            </h2>
          </>
        ) : (
          ""
        )
      ) : (
        "--"
      )}
    </div>
  ) : (
    ""
  );
};

export default MovieSummary;
