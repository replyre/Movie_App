import React from "react";
import "./Booking.css";

const Booking = ({ setCheckBooking, movieData }) => {
  const [validation, setValidation] = React.useState(true);
  const [userData, setUserData] = React.useState({
    name: "",
    phno: 0,
    email: "",
    price: 0,
  });
  const tickets = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [totalTickets, setCount] = React.useState(0);
  const handlePayment = () => {
    setValidation(true);

    /^[A-Za-z][A-Za-z0-9_]{3,29}$/.test(userData.name) ? (
      <></>
    ) : (
      <>
        {alert("invalid Name")}
        {setValidation(false)}
      </>
    );
    /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(userData.email) ? (
      <></>
    ) : (
      <>
        {alert("invalid email")}
        {setValidation(false)}
      </>
    );
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(
      userData.phno
    ) ? (
      <></>
    ) : (
      <>
        {alert("invalid phonenumber")}
        {setValidation(false)}
      </>
    );
    let price = totalTickets * 250;
    price > 0 ? (
      <></>
    ) : (
      <>
        {alert("Please select Tickets")}
        {setValidation(false)}
      </>
    );
    if (validation === false) return;
    {
      userData.name.length > 0
        ? alert("Successfully booked tickets")
        : alert("Please fill the details properly");
      let userarray = [
        {
          name: userData.name,
          phno: userData.phno,
          email: userData.email,
          movieid: movieData.id,
          amt: price,
        },
      ];
      userData.name.length > 0 ? (
        localStorage.setItem("user", JSON.stringify(userarray))
      ) : (
        <></>
      );
    }
  };
  return (
    <>
      <div className="model-wrapper"></div>
      <div className="model-container">
        <h1>Book Tickets</h1>
        <div className="movieInfo">
          <img
            src={
              movieData.image
                ? movieData.image.medium
                : "https://www.pngitem.com/pimgs/m/346-3466346_clipart-of-movie-films-and-cinema-film-reel.png"
            }
          />

          <div className="details">
            <p>
              <b>Movie Name:</b> {movieData.name}
            </p>
            <p>
              <b> Language:</b> {movieData.language}
            </p>
            <p>
              <b> Type:</b> {movieData.type}
            </p>
          </div>
        </div>
        <div class="form">
          <label>
            Name:
            <input
              placeholder="Enter your name"
              onChange={(e) => {
                setUserData((prevData) => ({
                  ...prevData,
                  name: e.target.value,
                }));
              }}
            />
          </label>
          <label>
            Phone Number:
            <input
              placeholder="Enter your number"
              onChange={(e) => {
                setUserData((prevData) => ({
                  ...prevData,
                  phno: e.target.value,
                }));
              }}
            />
          </label>
          <label>
            Email Address:
            <input
              placeholder="Enter your Email"
              onChange={(e) => {
                setUserData((prevData) => ({
                  ...prevData,
                  email: e.target.value,
                }));
              }}
            />
          </label>
        </div>
        Tickets:
        <span className="Tickets">
          {tickets.map((count, index) => {
            return (
              <span className="ticket_no" onClick={() => setCount(index + 1)}>
                {count}
              </span>
            );
          })}
        </span>
        Total price: ₹ {totalTickets * 250}
        <div className="buttons">
          <button
            style={{ backgroundColor: "blue", color: "white" }}
            onClick={handlePayment}
          >
            Book
          </button>
          <button
            style={{ backgroundColor: "red", color: "white" }}
            onClick={() => setCheckBooking(false)}
          >
            Back
          </button>
        </div>
      </div>
    </>
  );
};

export default Booking;
