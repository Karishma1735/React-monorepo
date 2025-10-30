
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

  test("does not show the text initially", () => {
    render(<App />);
    expect(screen.queryByText("Welcome to React Challenges")).not.toBeInTheDocument();
  });

  test("shows the text after clicking ", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: /show text/i });
    fireEvent.click(button);
    expect(screen.getByText("Welcome to React Challenges")).toBeInTheDocument();
  });

  test("hides content", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: /show text/i });
    fireEvent.click(button);
    fireEvent.click(button);
    expect(screen.queryByText("Welcome to React Challenges")).not.toBeInTheDocument();
  });

