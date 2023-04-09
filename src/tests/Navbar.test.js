import React from "react";
import { render } from "@testing-library/react";
import Navbar from "../components/Navbar";

describe("Navbar Component", () => {
  test("Navbar is rendered correctly", () => {
    const { getByText } = render(<Navbar />);

    expect(getByText(/View Properties/i)).toBeInTheDocument();
    expect(getByText(/Add a Property/i)).toBeInTheDocument();
  });

  test("Navbar is rendered correctly - snapshot", () => {
    const { getByText } = render(<Navbar />);

    expect({ getByText }).toMatchSnapshot();
  });
});
