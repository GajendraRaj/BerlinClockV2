import React from "react";
import PropTypes from "prop-types";

function StandardClock(props) {
  return <div>{props.time}</div>;
}

StandardClock.propTypes = {
  time: PropTypes.string.isRequired
};

export default StandardClock;
