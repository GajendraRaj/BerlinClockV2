import React from "react";
import { shallow } from "enzyme";
import App from "../component/App";
import constants from "../constant";

describe("App component", () => {
  const wrapper = shallow(<App />);

  it("Should have the application title", () => {
    expect(wrapper.find("h1").text()).toEqual(constants.APPLICATION_TITLE);
  });

  it("Should render the StandardClock component", () => {
    expect(wrapper.find("StandardClock").length).toEqual(1);
  });
});
