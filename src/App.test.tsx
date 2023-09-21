import { fireEvent, prettyDOM, render, screen } from "@testing-library/react";
import SearchBar from "./components/SearchBar";
import OrderBy from "./components/OrderBy";
import { Order } from "./types";

test("SearchBar", () => {
  const setSearch = jest.fn();
  render(<SearchBar setSearch={setSearch} />);
  const inputElement = screen.getByPlaceholderText(/podcast/i);
  expect(inputElement).toBeInTheDocument();
  expect(inputElement).toBeEnabled();
});

test("SearchIcon", () => {
  render(<SearchBar setSearch={() => {}} />);
  const searchIcon = screen.getByLabelText("searchIcon");
  expect(searchIcon).toBeInTheDocument();
});

test("OrderBy", () => {
  const setOrder = jest.fn();
  render(<OrderBy setOrder={setOrder} order={Order.none} />);
  const selectElement = screen.getByDisplayValue("");
  expect(selectElement).toBeInTheDocument();
  expect(selectElement).toBeEnabled();
});

test("Order by name", () => {
  const setOrder = jest.fn();
  const component = render(
    <OrderBy setOrder={setOrder} order={Order.ArtistName} />
  );
  const selectElement = component.container.querySelector("select");
  expect(selectElement).toBeInTheDocument();
  expect(selectElement).toBeEnabled();
});
