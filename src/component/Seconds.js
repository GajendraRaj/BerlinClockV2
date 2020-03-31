import React from "react";
import PropTypes from "prop-types";
import constants from "../constant";

const Seconds = props => {
  const secondsColor =
    props.seconds === constants.EVEN
      ? constants.EVEN_STYLE_CLASS
      : constants.ODD_STYLE_CLASS;

  return <div className={`seconds ${secondsColor}`} />;
};

Seconds.propTypes = {
  seconds: PropTypes.string.isRequired
};

export default Seconds;
