import React from "react";
import PropTypes from "prop-types";
import constants from "../constant";

const Minutes = props => {
  const minuteColor = minute =>
    minute === constants.MINUTE_LAMP
      ? constants.EVEN_STYLE_CLASS
      : constants.ODD_STYLE_CLASS;

  return (
    <div>
      {props.minutes.map((minute, i) => (
        <div key={i} className="hours">
          {minute &&
            minute.split("").map((m, idx) => (
              <div
                key={idx}
                className={`hours-rows ${minuteColor(m)}`}
                style={{
                  width: i === 0 ? "9%" : "25%"
                }}
              />
            ))}
        </div>
      ))}
    </div>
  );
};

Minutes.propTypes = {
  minutes: PropTypes.array.isRequired
};

export default Minutes;
