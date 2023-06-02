import { useState } from "react";
import "./App.css";
import MovieContainer from "./components/MovieContainer";
import MovieSummary from "./components/MovieSummary";

function App() {
  const [data, setData] = useState("");
  return (
    <div className="App">
      <MovieContainer setData={setData} />
      <MovieSummary data={data} />
    </div>
  );
}

export default App;
