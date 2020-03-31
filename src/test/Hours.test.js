import checkPropTypes from "check-prop-types";
import Hours from "../component/Hours";

describe("Hours component", () => {
  it("Should throw error message if there is no hours prop", () => {
    const errorMsg =
      "Failed prop type: The prop `hours` is marked as required in `<<anonymous>>`, but its value is `undefined`.";

    const result = checkPropTypes(
      Hours.propTypes,
      { hours: undefined },
      "prop",
      Hours.hours
    );

    expect(result).toEqual(errorMsg);
  });
});
