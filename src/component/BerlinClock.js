import React from "react";
import PropTypes from "prop-types";
import constants from "../constant";
import Seconds from "./Seconds";

const BerlinClock = props => {
  const berlinFormat = time => {
    const [hours, minutes, seconds] = time
      .split(":")
      .map(number => parseInt(number));
    const secondValue = seconds % 2 === 0 ? constants.EVEN : constants.ODD;

    return { secondValue };
  };

  return (
    <div className="clock mv4">
      <Seconds seconds={berlinFormat(props.time).secondValue} />
    </div>
  );
};

BerlinClock.propTypes = {
  time: PropTypes.string.isRequired
};

export default BerlinClock;
