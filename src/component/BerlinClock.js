import React from "react";
import PropTypes from "prop-types";

const BerlinClock = props => {
  const berlinFormat = time => {
    const [hours, minutes, seconds] = time
      .split(":")
      .map(number => parseInt(number));
    const secondValue = seconds % 2 === 0 ? "E" : "O";

    return { secondValue };
  };

  return <div>{berlinFormat(props.time).secondValue}</div>;
};

BerlinClock.propTypes = {
  time: PropTypes.string.isRequired
};

export default BerlinClock;
