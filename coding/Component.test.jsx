import { render } from "@react-testing";

import TestApp from "./Component.jsx";

describe("Test the Component", () => {
  it("Test Case 1", () => {
    const output = render(<TestApp />);

    expect(output).toHaveText("Click Me");
  });
});
