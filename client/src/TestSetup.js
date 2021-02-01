import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import App from "./App";

describe("App", () => {
  it("mounts to a simulated DOM", () => {
    const simulatedDOM = render(<App />);
    const p = simulatedDOM.queryByText(/error/i);
    const h1 = simulatedDOM.queryByText(/Cup/i);
    const div = simulatedDOM.findAllByRole(class);
    // console.log(simulatedDOM.debug());
    expect(p).toBeInTheDocument();
    expect(h1).toBeInTheDocument();
  });
});
