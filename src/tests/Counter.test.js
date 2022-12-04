import {render, screen, fireEvent} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Counter from "../components/Counter";

let counter;
let increaseButton;
let decreaseButton;

beforeEach(() => {
	render(<Counter />);
	counter = screen.getByTestId("count");
	increaseButton = screen.getByRole("button", {name: "+"});
	decreaseButton = screen.getByRole("button", {name: "-"});
});

test("renders counter message", () => {
	let message = screen.getByText("Counter");
	expect(message).toBeInTheDocument();
});

test("should render initial count with value of 0", () => {
	expect(counter).toHaveTextContent("0");
});

test("clicking + increments the count", async () => {
	userEvent.click(increaseButton);
	expect(counter).toHaveTextContent("1");
});

test("clicking - decrements the count", () => {
	userEvent.click(decreaseButton);
	expect(counter).toHaveTextContent("-1");
});
