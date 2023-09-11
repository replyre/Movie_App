import { useState } from "react";
import "./App.css";
import MovieContainer from "./components/MovieContainer";
import MovieSummary from "./components/MovieSummary";

function App() {
  const [data, setData] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <div className="App">
      {/* I made this when I was learning React so, a lot prop drilling is used here.   */}
      <MovieContainer setData={setData} setToggle={setToggle} />
      <MovieSummary data={data} setToggle={setToggle} toggle={toggle} />
    </div>
  );
}

export default App;
