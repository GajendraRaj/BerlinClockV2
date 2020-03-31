import checkPropTypes from "check-prop-types";
import Minutes from "../component/Minutes";

describe("Minutes component", () => {
  it("Should throw error message if there is no minutes prop", () => {
    const errorMsg =
      "Failed prop type: The prop `minutes` is marked as required in `<<anonymous>>`, but its value is `undefined`.";

    const result = checkPropTypes(
      Minutes.propTypes,
      { minutes: undefined },
      "prop",
      Minutes.minutes
    );

    expect(result).toEqual(errorMsg);
  });
});
