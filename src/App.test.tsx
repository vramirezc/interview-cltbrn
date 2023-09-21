import React from "react";
import { render, screen } from "@testing-library/react";
import SearchBar from "./components/SearchBar";

test("renders content", () => {
  const setSearch = jest.fn();
  render(<SearchBar setSearch={setSearch} />);
  const inputElement = screen.getByPlaceholderText(/podcast/i);
  expect(inputElement).toBeInTheDocument();
});
