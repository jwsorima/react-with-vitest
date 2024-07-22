import { describe, expect, test } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import ButtonIncrease from "../components/ButtonIncrease";
import { useState } from "react";

function TestButtonIncrease() {
  const [count, setCount] = useState(0);
  return <ButtonIncrease count={count} setCount={setCount}  />
}

describe("ButtonIncrease", () => {
  test("renders", () => {
    render(<TestButtonIncrease />)
    
    expect(screen.getByText("count is 0")).toBeDefined();
  })

  test("should increase count by 1", () => {
    render(<TestButtonIncrease />)

    const button = screen.getByText("count is 0");

    fireEvent.click(button);

    expect(screen.getByText("count is 1")).toBeDefined();
  })
})