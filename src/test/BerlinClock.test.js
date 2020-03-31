import React from "react";
import { shallow, mount } from "enzyme";
import BerlinClock from "../component/BerlinClock";
import checkPropTypes from "check-prop-types";
import constants from "../constant";

describe("BerlinClock component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<BerlinClock time={"15:33:12"} />);
  });

  it("Should display E in even second value", () => {
    const secondsWrapper = wrapper.find("div");
    expect(secondsWrapper.text()).toEqual(constants.EVEN);
  });

  it("Should display O in odd second value", () => {
    const wrapper = shallow(<BerlinClock time={"15:33:13"} />);
    const secondsWrapper = wrapper.find("div");
    expect(secondsWrapper.text()).toEqual(constants.ODD);
  });

  it("Should throw error message if there is no time prop", () => {
    const errorMsg =
      "Failed prop type: The prop `time` is marked as required in `<<anonymous>>`, but its value is `undefined`.";

    const result = checkPropTypes(
      BerlinClock.propTypes,
      { time: undefined },
      "prop",
      BerlinClock.time
    );

    expect(result).toEqual(errorMsg);
  });

  it("Should throw error message if time prop type is not a string", () => {
    const errorMsg =
      "Failed prop type: Invalid prop `time` of type `number` supplied to `<<anonymous>>`, expected `string`.";

    const result = checkPropTypes(
      BerlinClock.propTypes,
      { time: 12 },
      "prop",
      BerlinClock.time
    );

    expect(result).toEqual(errorMsg);
  });
});
