import React from "react";
import PropTypes from "prop-types";
import constants from "../constant";
import Seconds from "./Seconds";
import Hours from "./Hours";
import Minutes from "./Minutes";

const BerlinClock = props => {
  const berlinFormat = time => {
    const [hours, minutes, seconds] = time
      .split(":")
      .map(number => parseInt(number));
    const secondValue = seconds % 2 === 0 ? constants.EVEN : constants.ODD;
    const hoursUpperRow =
      constants.HOUR_LAMP.repeat(hours / 5) +
      constants.ODD.repeat(4 - parseInt(hours / 5));
    const hoursLowerRow =
      constants.HOUR_LAMP.repeat(hours % 5) +
      constants.ODD.repeat(4 - (hours % 5));
    const hoursValue = [hoursUpperRow, hoursLowerRow];
    const minutesUpperRow =
      constants.MINUTE_LAMP.repeat(minutes / 5) +
      constants.ODD.repeat(11 - parseInt(minutes / 5));
    const minutesValue = [minutesUpperRow];

    return { secondValue, hoursValue, minutesValue };
  };

  return (
    <div className="clock mv4">
      <Seconds seconds={berlinFormat(props.time).secondValue} />
      <Hours hours={berlinFormat(props.time).hoursValue} />
      <Minutes minutes={berlinFormat(props.time).minutesValue} />
    </div>
  );
};

BerlinClock.propTypes = {
  time: PropTypes.string.isRequired
};

export default BerlinClock;
