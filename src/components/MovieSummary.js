import React, { useEffect, useState } from "react";
import "./MovieSummary.css";
import { Book, Justify, TicketPerforated } from "react-bootstrap-icons";
import Booking from "./Booking";
import { backdropClasses } from "@mui/material";
import { Close } from "@mui/icons-material";

const MovieSummary = ({ data, setToggle, toggle }) => {
  const [checkBooking, setCheckBooking] = React.useState(false);
  const [summaryData, setSummaryData] = useState(data);
  let Userdata = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : "";
  console.log(Userdata);
  const handleBooking = () => {
    setCheckBooking(true);
  };
  let movieData = data?.length > 0 ? JSON.parse(data) : "";
  return toggle ? (
    <div className="Summary">
      <div
        onClick={() => {
          setToggle(false);
        }}
        className="Close-Button"
      >
        x
      </div>
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
        <img
          src={
            movieData.image
              ? movieData.image.medium
              : "data:image/png;base64,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"
          }
        />
        <div
          style={{
            overflow: "scroll",
            display: "flex",
            flexDirection: "column",
            padding: "2px",
            justifyContent: "space-evenly",
            // backgroundColor: "black",
            height: "260px",
            textAlign: "Justify",
          }}
        >
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
        <div className="genres_summary">
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

      {Userdata ? (
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
