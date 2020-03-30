import React, { useState, useEffect } from "react";
import StandardClock from "./StandardClock";
import constants from "../constant";
import "./App.css";

function App() {
  const [time, setTime] = useState("");

  useEffect(() => {
    setTime(startClock(new Date()));
  });

  const startClock = date => {
    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();

    return `${h}:${m}:${s}`;
  };

  return (
    <div className="App">
      <h1>{constants.APPLICATION_TITLE}</h1>
      <StandardClock time={time} />
    </div>
  );
}

export default App;
