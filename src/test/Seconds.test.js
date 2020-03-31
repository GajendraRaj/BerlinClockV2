import checkPropTypes from "check-prop-types";
import Seconds from "../component/Seconds";

describe("Seconds component", () => {
  it("Should throw error message if there is no seconds prop", () => {
    const errorMsg =
      "Failed prop type: The prop `seconds` is marked as required in `<<anonymous>>`, but its value is `undefined`.";

    const result = checkPropTypes(
      Seconds.propTypes,
      { seconds: undefined },
      "prop",
      Seconds.seconds
    );

    expect(result).toEqual(errorMsg);
  });

  it("Should throw error message if seconds prop type is not a string", () => {
    const errorMsg =
      "Failed prop type: Invalid prop `seconds` of type `number` supplied to `<<anonymous>>`, expected `string`.";

    const result = checkPropTypes(
      Seconds.propTypes,
      { seconds: 12 },
      "prop",
      Seconds.seconds
    );

    expect(result).toEqual(errorMsg);
  });
});
