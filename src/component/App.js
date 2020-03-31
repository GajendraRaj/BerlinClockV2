import React, { useState, useEffect } from "react";
import StandardClock from "./StandardClock";
import BerlinClock from "./BerlinClock";
import constants from "../constant";
import "./App.css";

function App() {
  const [time, setTime] = useState("");

  useEffect(() => {
    setTime(startClock(new Date()));
  });

  const startClock = date => {
    const h = date.getHours();
    const m = formatMinutesOrSeconds(date.getMinutes());
    const s = formatMinutesOrSeconds(date.getSeconds());

    return `${h}:${m}:${s}`;
  };

  const formatMinutesOrSeconds = minutesOrSeconds => {
    return minutesOrSeconds < 10
      ? `0${minutesOrSeconds}`
      : `${minutesOrSeconds}`;
  };

  return (
    <div className="App">
      <h1>{constants.APPLICATION_TITLE}</h1>
      <BerlinClock time={time} />
      <StandardClock time={time} />
    </div>
  );
}

export default App;
